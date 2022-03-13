import React from 'react';
import { DevMenu } from '../components/DevMenu/DevMenu';
import { devGroups, devRoutes } from '../data/devRouter';
import { useLocation } from 'react-router-dom';

export function DevMenuContainer(props: any) {
    const location = useLocation();

    return (
        <DevMenu
            groups={devGroups}
            items={devRoutes}
            onClick={props.onClick}
            pathname={location.pathname}
        />
    );
}

export default DevMenuContainer;
