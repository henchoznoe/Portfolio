interface JsonLdProps {
  readonly data: Record<string, unknown>
}

export const JsonLd = ({ data }: Readonly<JsonLdProps>) => (
  <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: les données sont construites depuis la configuration statique du portfolio.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
)
