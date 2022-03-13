// devtools.js
const backgroundPageConnection = chrome.runtime.connect({
    name: 'devtools-page',
});

let panel: any;

chrome.devtools.panels.create(
    'Redux connected',
    '',
    'panel.html',
    function (_panel) {
        panel = _panel;

        backgroundPageConnection.postMessage({
            name: 'init',
            tabId: chrome.devtools.inspectedWindow.tabId,
        });

        backgroundPageConnection.postMessage({
            tabId: chrome.devtools.inspectedWindow.tabId,
            scriptToInject: 'injected_script.js',
        });

        backgroundPageConnection.onMessage.addListener(function (message: any) {
            // Handle responses from the background page, if any
        });
    }
);
