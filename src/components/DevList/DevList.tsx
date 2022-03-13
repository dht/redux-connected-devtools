import React from 'react';
import { Container } from './DevList.style';
import { FixedSizeList as List } from 'react-window';
import './DevList.scss';

export type DevListProps = {};

export function DevList(_props: DevListProps) {
    const Row = (rowInfo: any) => {
        const { index, style } = rowInfo;
        return <div style={style}>Row {index}</div>;
    };

    return (
        <Container
            className='DevList-container'
            data-testid='DevList-container'
        >
            <List
                height={850}
                itemCount={1000}
                itemSize={35}
                width={350}
                className='list'
            >
                {Row}
            </List>
        </Container>
    );
}

export default DevList;
