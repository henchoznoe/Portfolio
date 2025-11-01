import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        ],
    },
})
