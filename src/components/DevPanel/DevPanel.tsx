import DevMenu from '../../containers/DevMenuContainer';
import React, { useState } from 'react';
import { Actions, Container, Content } from './DevPanel.style';
import { devComponents } from '../../data/devComponents';
import { devRoutes, IDevRoute } from '../../data/devRoutes';
import { Json } from '../../types';

export type DevPanelProps = {
    children: JSX.Element | JSX.Element[];
};

export function DevPanel(props: DevPanelProps) {
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
                selectedId={route.id}
                onClick={(item: IDevRoute) => setRoute(item)}
            />
            <Actions>{props.children}</Actions>
            <Content>{renderRoute()}</Content>
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
