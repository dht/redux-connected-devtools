import React from 'react';
import { useSelector } from 'react-redux';
import DevMenu from '../components/DevMenu/DevMenu';
import { devGroups, devRoutes, IDevRoute } from '../data/devRoutes';
import { $menuBadges, $menuBadgesTotal } from '../store/selectors';

type DevPanelProps = {
    selectedId: string;
    onClick: (route: IDevRoute) => void;
};

export function DevMenuContainer(props: DevPanelProps) {
    const badges = useSelector($menuBadges);
    const badgesTotal = useSelector($menuBadgesTotal);

    return (
        <DevMenu
            groups={devGroups}
            items={devRoutes}
            badges={badges}
            badgesTotal={badgesTotal}
            selectedId={props.selectedId}
            onClick={props.onClick}
        />
    );
}

export default DevMenuContainer;
