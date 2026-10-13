import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { analyzeCommits } from '@semantic-release/commit-analyzer'
import { generateNotes } from '@semantic-release/release-notes-generator'

const config = JSON.parse(
  readFileSync(new URL('../.releaserc.json', import.meta.url), 'utf8'),
)
const [, analyzerOptions] = config.plugins.find(
  plugin =>
    Array.isArray(plugin) && plugin[0] === '@semantic-release/commit-analyzer',
)
const logger = { log: () => {} }
const analyze = messages =>
  analyzeCommits(analyzerOptions, {
    commits: messages.map(message => ({ message })),
    logger,
    cwd: process.cwd(),
  })

for (const [message, expected] of [
  ['feat: add a case study', 'minor'],
  ['feat!: change project URLs', 'major'],
  ['refactor!: change component contracts', 'major'],
  ['fix: repair language navigation', 'patch'],
  ['chore(deps): update Next.js', 'patch'],
  ['chore: pin the toolchain', 'patch'],
  [
    'refactor!: change the public API\n\nBREAKING CHANGE: old contracts are removed',
    'major',
  ],
  ['refactor: simplify components', 'patch'],
  ['ci: update the build workflow', 'patch'],
  ['build: pin pnpm', 'patch'],
  ['test: cover release rules', 'patch'],
  ['perf: reduce image transfer', 'patch'],
  ['revert: remove a broken change', 'patch'],
  [
    'feat!: change public project URLs\n\nBREAKING CHANGE: old URLs are removed',
    'major',
  ],
  ['docs: improve the README', null],
  ['chore(release): 1.3.0', null],
]) {
  test(`${message.split('\n')[0]} → ${expected ?? 'no release'}`, async () => {
    assert.equal(await analyze([message]), expected)
  })
}

test('documentation and generated release commits do not hide a feature', async () => {
  assert.equal(
    await analyze([
      'docs: explain releases',
      'chore(release): 1.3.0',
      'feat: add a project',
    ]),
    'minor',
  )
})

test('maintenance-only releases have useful English changelog entries', async () => {
  const [, notesOptions] = config.plugins.find(
    plugin =>
      Array.isArray(plugin) &&
      plugin[0] === '@semantic-release/release-notes-generator',
  )
  const notes = await generateNotes(notesOptions, {
    commits: [
      { hash: 'a'.repeat(40), message: 'chore(deps): update Next.js' },
      { hash: 'b'.repeat(40), message: 'ci: pin build actions' },
      { hash: 'c'.repeat(40), message: 'refactor: simplify components' },
    ],
    lastRelease: { gitTag: 'v1.2.0' },
    nextRelease: { version: '1.2.1', gitTag: 'v1.2.1' },
    options: { repositoryUrl: 'https://github.com/henchoznoe/Portfolio.git' },
    cwd: process.cwd(),
  })
  for (const text of [
    'Maintenance',
    'update Next.js',
    'Continuous Integration',
    'pin build actions',
    'Refactoring',
    'simplify components',
  ]) {
    assert.ok(notes.includes(text), `Changelog should include ${text}`)
  }
})

test('the release targets main and commits its version, changelog, and lockfile', () => {
  assert.deepEqual(config.branches, ['main'])
  const [, npmOptions] = config.plugins.find(
    plugin => Array.isArray(plugin) && plugin[0] === '@semantic-release/npm',
  )
  assert.equal(npmOptions.npmPublish, false)
  const [, gitOptions] = config.plugins.find(
    plugin => Array.isArray(plugin) && plugin[0] === '@semantic-release/git',
  )
  assert.deepEqual(gitOptions.assets, [
    'package.json',
    'pnpm-lock.yaml',
    'CHANGELOG.md',
  ])
  assert.ok(!gitOptions.message.includes('[skip ci]'))
})
