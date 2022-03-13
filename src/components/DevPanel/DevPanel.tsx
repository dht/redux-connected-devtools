import DevMenu from '../../containers/DevMenuContainer';
import React from 'react';
import { Container, Content } from './DevPanel.style';
import { devComponents } from '../../data/devComponents';
import { devRoutes, IDevRoute } from '../../data/devRouter';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { Json } from '../../types';

export type DevPanelProps = {
    name: string;
};

export function DevPanel(props: DevPanelProps) {
    const { name } = props;
    const navigate = useNavigate();

    function onMenuClick(item: IDevRoute) {
        navigate(item.path);
    }

    function renderItem(devRoute: IDevRoute) {
        const { componentId, path } = devRoute;
        const Cmp = devComponents[componentId];
        return <Route path={path} key={path} element={<Cmp />} />;
    }

    function renderItems() {
        return devRoutes.map((devRoutes: IDevRoute) => renderItem(devRoutes));
    }

    return (
        <Container
            className='DevPanel-container'
            data-testid='DevPanel-container'
        >
            <DevMenu onClick={onMenuClick} />
            <Content>
                {name}
                <Routes>
                    {renderItems()}
                    <Route path='*' element={<Navigate to='/state' />} />
                </Routes>
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
