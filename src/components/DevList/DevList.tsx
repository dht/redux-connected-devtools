import React from 'react';
import { Container, Empty } from './DevList.style';
import { FixedSizeList as List } from 'react-window';
import { Json } from '../../types';
import classnames from 'classnames';

export type DevListProps = {
    items: Json[];
    row: React.FC<any>;
    selectedRow: any;
    onClick: (item: any) => void;
};

export function DevList(props: DevListProps) {
    const { row: Cmp, items, selectedRow } = props;

    const Item = (rowInfo: any) => {
        const { index, style } = rowInfo;

        const item = items[index];
        const className = classnames({ selected: item.id === selectedRow?.id });

        return (
            <Cmp
                onClick={props.onClick}
                className={className}
                index={index}
                style={style}
                item={item}
            />
        );
    };

    function renderEmpty() {
        return <Empty>Empty list</Empty>;
    }

    function renderList() {
        if (items.length === 0) {
            return renderEmpty();
        }

        return (
            <List
                height={850}
                itemCount={items.length}
                itemSize={68}
                width={350}
                className='list'
            >
                {Item}
            </List>
        );
    }

    return (
        <Container
            className='DevList-container'
            data-testid='DevList-container'
        >
            {renderList()}
        </Container>
    );
}

export default DevList;
