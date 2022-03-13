import React from 'react';
import { Container, Col, Id, Type } from './RequestRow.style';
import Time from '../Time/Time';
import { Json } from '../../types';
import { ApiRequest } from 'redux-connected';

export type RequestRowProps = {
    style: Json;
    item: ApiRequest;
    index: number;
    onClick: (item: ApiRequest) => void;
};

export function RequestRow(props: RequestRowProps) {
    const { index, style, item } = props;
    const { meta } = item;

    return (
        <Container
            className='DevListRow-container'
            data-testid='DevListRow-container'
            style={style}
            index={index}
            onClick={() => props.onClick(item)}
        >
            <Col>
                <Id>{meta.sequence}</Id>
                <Type>{item.originalAction?.type}</Type>
            </Col>
            <Col>
                <Time value={meta.createdTS} />
            </Col>
        </Container>
    );
}

export default RequestRow;
