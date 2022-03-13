// injected-script.js

window.postMessage(
    {
        greeting: 'hello there!',
        source: 'devtools-page',
    },
    '*'
);
