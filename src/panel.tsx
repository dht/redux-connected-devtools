import DevPanel from './containers/DevPanelContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/initialState';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <DevPanel />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.origin?.indexOf('http://localhost') === 0) {
        const store = (window as any).store;

        switch (request.type) {
            case 'CONNECTED_STATE':
                break;
            case 'CONNECTED_ACTION':
                const { payload } = request;
                const { action } = payload;
                store.dispatch(action);
                break;
        }
    }
});
