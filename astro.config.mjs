import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
    site: 'https://chriy.github.io',
    base: '/',
    output: 'static',
    srcDir: "./src",
    publicDir: "./public",
    server: {
        port: 3120
    },
    plugins: [
        tailwindcss(),
        "@tailwindcss/postcss",
    ],
    integrations: [react()]
});