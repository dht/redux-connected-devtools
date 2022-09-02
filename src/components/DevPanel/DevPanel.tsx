import DevMenu from '../../containers/DevMenuContainer';
import React, { useState } from 'react';
import { Actions, Container, Content } from './DevPanel.style';
import { devComponents } from '../../data/devComponents';
import { devRoutes, IDevRoute } from '../../data/devRoutes';

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

/*
    for the chrome extension devtools panel
    TODO: find another way to encapsulate this

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
*/

export default DevPanel;
