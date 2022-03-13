import {
    generateConnectedStoreEmpty,
    IReduxConnectedConfig,
    ConnectionType,
    RetryStrategy,
} from 'redux-connected';

type IAppState = {
    name: string;
    email: string;
};

export type MyStore = {
    appState: IAppState;
};

export const initialState: MyStore = {
    appState: {
        name: 'User2',
        email: 'user@example.com',
    },
};

const config: IReduxConnectedConfig = {
    defaultEndpointsConfig: {
        connectionType: ConnectionType.REST,
        retryStrategy: RetryStrategy.X2_TIMES,
    },
    endpointsConfigOverrides: {
        appState: {
            connectionType: ConnectionType.NONE,
        },
        logs: {
            connectionType: ConnectionType.NONE,
        },
    },
    adapters: {},
};

export const store = generateConnectedStoreEmpty(initialState, config);
(window as any).store = store;
