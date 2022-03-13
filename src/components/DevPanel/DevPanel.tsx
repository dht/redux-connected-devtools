import DevMenu from '../DevMenu/DevMenu';
import React, { useState } from 'react';
import { Container, Content } from './DevPanel.style';
import { devComponents } from '../../data/devComponents';
import { devGroups, devRoutes, IDevRoute } from '../../data/devRouter';
import { Json } from '../../types';

export type DevPanelProps = {
    name: string;
};

export function DevPanel(props: DevPanelProps) {
    const { name } = props;
    const [route, setRoute] = useState<IDevRoute>(devRoutes[0]);

    function renderRoute() {
        const Cmp = devComponents[route.componentId];
        return <Cmp key={route.id} />;
    }

    return (
        <Container
            className='DevPanel-container'
            data-testid='DevPanel-container'
        >
            <DevMenu
                groups={devGroups}
                items={devRoutes}
                selectedId={route.id}
                onClick={(item: IDevRoute) => setRoute(item)}
            />
            <Content>
                {name}
                {renderRoute()}
            </Content>
        </Container>
    );
}

let bgConnection;

function init(id: string) {
    bgConnection = chrome.runtime?.connect({
        name: id,
    });

    if (bgConnection) {
        bgConnection.onMessage.addListener((message: Json) => {
            console.log('message ->', message);
        });
    }
}

if (chrome) {
    const tabId = String(chrome.devtools?.inspectedWindow.tabId || '');
    init(tabId);
}

export default DevPanel;
