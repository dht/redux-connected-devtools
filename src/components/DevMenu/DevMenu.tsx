import React from 'react';
import { IDevRoute } from '../../data/devRouter';
import {
    Container,
    MenuGroup,
    MenuGroupTitle,
    MenuItem,
    Title,
    Badge,
    Version,
} from './DevMenu.style';

export type DevMenuProps = {
    groups: string[];
    items: IDevRoute[];
    onClick: (route: IDevRoute) => void;
    pathname: string;
};

export function DevMenu(props: DevMenuProps) {
    const { groups, items, pathname } = props;

    function renderItem(item: IDevRoute) {
        const { title, path } = item;

        const selected = path === pathname;

        return (
            <MenuItem
                selected={selected}
                key={item.path}
                onClick={() => props.onClick(item)}
            >
                <Title>{title}</Title>
                <Badge>5</Badge>
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
            <Version>1.0.0</Version>
        </Container>
    );
}

export default DevMenu;
