import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
const svgLoader = require('vite-plugin-react-svg');
const path = require('path');
require('dotenv-flow').config();

const cwd = path.resolve(process.cwd(), '../../');
const host = (process.env.VITE_SERVER_DOMAIN || '').replace(/https?:\/\//, '');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        svgLoader(),
    ],
    define: {
        'process.env.MONO': process.env.MONO,
    },
    resolve: {
        alias: {
            '@pillooo/forms': `${cwd}/packages/web-forms/src`,
            '@pillooo/tables': `${cwd}/packages/web-tables/src`,
            '@pillooo/details': `${cwd}/packages/web-details/src`,
            '@pillooo/devtools': `${cwd}/packages/web-devtools/src`,
            '@pillooo/router': `${cwd}/packages/web-router/src`,
            '@pillooo/ui': `${cwd}/packages/web-ui/src`,
            '@pillooo/base-ui': `${cwd}/packages/web-base-ui/src`,
            '@pillooo/testing-base': `${cwd}/packages/web-testing-base/src`,
            '@pillooo/hooks': `${cwd}/packages/hooks/src`,
            '@pillooo/root-types': `${cwd}/packages/root-types/src`,
            '@pillooo/themes': `${cwd}/packages/web-themes/src`,
            '@pillooo/platformer': `${cwd}/packages/platformer`,
            '@pillooo/app-home': `${cwd}/apps/home`,
        },
    },
    server: {
        host,
        port: 3001,
    },
});
