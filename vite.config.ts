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
            '@gli/forms': `${cwd}/packages/web-forms/src`,
            '@gli/tables': `${cwd}/packages/web-tables/src`,
            '@gli/details': `${cwd}/packages/web-details/src`,
            '@gli/devtools': `${cwd}/packages/web-devtools/src`,
            '@gli/router': `${cwd}/packages/web-router/src`,
            '@gli/ui': `${cwd}/packages/web-ui/src`,
            '@gli/base-ui': `${cwd}/packages/web-base-ui/src`,
            '@gli/testing-base': `${cwd}/packages/web-testing-base/src`,
            '@gli/hooks': `${cwd}/packages/hooks/src`,
            '@gli/root-types': `${cwd}/packages/root-types/src`,
            '@gli/themes': `${cwd}/packages/web-themes/src`,
            '@gli/platformer': `${cwd}/packages/platformer`,
            '@gli/app-home': `${cwd}/apps/home`,
        },
    },
    server: {
        host,
        port: 3001,
    },
});
