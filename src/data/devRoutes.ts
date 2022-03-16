export type IDevRoute = {
    id: string;
    title: string;
    group: string;
    componentId: string;
};

export const devRoutes: IDevRoute[] = [
    {
        id: 'lifecycleReceived',
        title: '1. Received',
        group: 'lifecycle',
        componentId: 'LifecycleReceived',
    },
    {
        id: 'lifecycleInQueue',
        title: '2. In queue',
        group: 'lifecycle',
        componentId: 'LifecycleInQueue',
    },

    {
        id: 'lifecyclePendingApi',
        title: '3. Pending API',
        group: 'lifecycle',
        componentId: 'LifecyclePendingApi',
    },
    {
        id: 'lifecyclePostAction',
        title: '4. Post action',
        group: 'lifecycle',
        componentId: 'LifecyclePostAction',
    },
    {
        id: 'lifecycleGeneralError',
        title: 'e1. General errors',
        group: 'errors',
        componentId: 'LifecycleGeneralError',
    },
    {
        id: 'lifecycleApiError',
        title: 'e2. API errors',
        group: 'errors',
        componentId: 'LifecycleApiError',
    },
    {
        id: 'lifecycleFailed',
        title: 'e3. Failed requests (after retries)',
        group: 'errors',
        componentId: 'LifecycleFailed',
    },
    {
        id: 'endpointStatus',
        title: 'Endpoint status',
        group: 'settings & stats',
        componentId: 'EndpointStatus',
    },
    {
        id: 'settingsGlobal',
        title: 'Global settings',
        group: 'settings & stats',
        componentId: 'GlobalSettings',
    },
    {
        id: 'settingsEndpoints',
        title: 'Endpoints configs',
        group: 'settings & stats',
        componentId: 'EndpointConfigs',
    },
    {
        id: 'statsGlobal',
        title: 'Global stats',
        group: 'settings & stats',
        componentId: 'GlobalStats',
    },
];

const getGroups = (): string[] => {
    const output: string[] = [];

    devRoutes.forEach((group) => {
        if (!output.includes(group.group)) {
            output.push(group.group);
        }
    });

    return output;
};

export const devGroups: string[] = getGroups();
