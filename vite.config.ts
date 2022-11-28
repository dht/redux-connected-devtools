import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from 'shared-base';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';

export default defineConfig({
    plugins: [dts({})],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ReduxConnectedDevtools',
            formats: ['es', 'umd'],
            fileName: (format) => `redux-connected-devtools.${format}.js`,
        },
        rollupOptions: {
            plugins: [analyze()],
            ...externals({
                react: '',
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
});
