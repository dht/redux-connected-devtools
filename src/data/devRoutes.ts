export type IDevRoute = {
    id: string;
    title: string;
    group: string;
    componentId: string;
};

export const devRoutes: IDevRoute[] = [
    {
        id: '/lifecycle/Received',
        title: '1. Received',
        group: 'lifecycle',
        componentId: 'LifecycleReceived',
    },
    {
        id: '/lifecycle/inQueue',
        title: '2. In queue',
        group: 'lifecycle',
        componentId: 'LifecycleInQueue',
    },
    {
        id: '/lifecycle/general-error',
        title: '3. General error',
        group: 'lifecycle',
        componentId: 'LifecycleGeneralError',
    },
    {
        id: '/lifecycle/pending',
        title: '4. Pending API',
        group: 'lifecycle',
        componentId: 'LifecyclePendingApi',
    },
    {
        id: '/lifecycle/api-error',
        title: '5. API error',
        group: 'lifecycle',
        componentId: 'LifecycleApiError',
    },
    {
        id: '/lifecycle/postAction',
        title: '6. Post action',
        group: 'lifecycle',
        componentId: 'LifecyclePostAction',
    },
    {
        id: '/state',
        title: 'State',
        group: 'state',
        componentId: 'StateViewer',
    },
    {
        id: '/status',
        title: 'Endpoint status',
        group: 'state',
        componentId: 'EndpointStatus',
    },
    {
        id: '/settings/global',
        title: 'Global settings',
        group: 'settings & stats',
        componentId: 'GlobalSettings',
    },
    {
        id: '/settings/endpoints',
        title: 'Endpoints configs',
        group: 'settings & stats',
        componentId: 'EndpointConfigs',
    },
    {
        id: '/stats/global',
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
