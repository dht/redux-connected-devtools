export type IDevRoute = {
    id: string;
    title: string;
    group: string;
    componentId: string;
};

export const devRoutes: IDevRoute[] = [
    {
        id: '/lifecycle/original',
        title: '1. Original',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/gatekeeper',
        title: '2. Gatekeeper',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/incoming',
        title: '3. Incoming',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/queue',
        title: '4. Queue',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/firing',
        title: '5. Firing',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/api',
        title: '6. API',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/error',
        title: '7. Error',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/lifecycle/postAction',
        title: '8. Post-action',
        group: 'lifecycle',
        componentId: 'Lifecycle',
    },
    {
        id: '/logs',
        title: 'Logs',
        group: 'state',
        componentId: 'LogsViewer',
    },
    {
        id: '/state',
        title: 'State',
        group: 'state',
        componentId: 'StateViewer',
    },
    {
        id: '/sagas',
        title: 'Sagas',
        group: 'state',
        componentId: 'SagaViewer',
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
