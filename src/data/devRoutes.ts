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
        id: 'lifecycleGeneralError',
        title: '3. General error',
        group: 'lifecycle',
        componentId: 'LifecycleGeneralError',
    },
    {
        id: 'lifecyclePendingApi',
        title: '4. Pending API',
        group: 'lifecycle',
        componentId: 'LifecyclePendingApi',
    },
    {
        id: 'lifecycleApiError',
        title: '5. API error',
        group: 'lifecycle',
        componentId: 'LifecycleApiError',
    },
    {
        id: 'lifecyclePostAction',
        title: '6. Post action',
        group: 'lifecycle',
        componentId: 'LifecyclePostAction',
    },
    {
        id: 'endpointStatus',
        title: 'Endpoint status',
        group: 'state',
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
