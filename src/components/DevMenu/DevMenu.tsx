import React from 'react';
import { IDevRoute } from '../../data/devRoutes';
import {
    Container,
    MenuGroup,
    MenuGroupTitle,
    MenuItem,
    Title,
    Badge,
    BadgeTotal,
} from './DevMenu.style';
import classnames from 'classnames';

export type DevMenuProps = {
    groups: string[];
    items: IDevRoute[];
    onClick: (route: IDevRoute) => void;
    selectedId: string;
    badges: Record<string, number>;
    badgesTotal: Record<string, number>;
};

export function DevMenu(props: DevMenuProps) {
    const { groups, items, selectedId, badges, badgesTotal } = props;

    function renderItem(item: IDevRoute) {
        const { title, id } = item;
        const selected = id === selectedId;

        const badge = badges[id];
        const badgeTotal = badgesTotal[id];

        return (
            <MenuItem
                key={item.id}
                className={classnames({ selected })}
                onClick={() => props.onClick(item)}
            >
                <Title>{title}</Title>
                {badgeTotal > 0 && badgeTotal !== badge && (
                    <BadgeTotal>{badgeTotal}</BadgeTotal>
                )}
                {badge > 0 && <Badge>{badge}</Badge>}
            </MenuItem>
        );
    }

    function renderItems(groupItems: IDevRoute[]) {
        return groupItems.map((item: IDevRoute) => renderItem(item));
    }

    function renderGroup(group: string) {
        const groupItems = items.filter((item) => item.group === group);

        return (
            <MenuGroup key={group}>
                <MenuGroupTitle>{group}</MenuGroupTitle>
                {renderItems(groupItems)}
            </MenuGroup>
        );
    }

    function renderGroups() {
        return groups.map((group: string) => renderGroup(group));
    }

    return (
        <Container
            className='DevMenu-container'
            data-testid='DevMenu-container'
        >
            {renderGroups()}
        </Container>
    );
}

export default DevMenu;
