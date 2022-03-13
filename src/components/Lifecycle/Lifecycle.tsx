import DevInspector from '../DevInspector/DevInspector';
import DevList from '../DevList/DevList';
import React, { useState } from 'react';
import RequestRow from '../RequestRow/RequestRow';
import { ApiRequest } from 'redux-connected';
import { Container } from './Lifecycle.style';

export type LifecycleProps = {
    requests: ApiRequest[];
};

export function Lifecycle(props: LifecycleProps) {
    const { requests } = props;
    const [item, setItem] = useState<ApiRequest>();

    function onClick(newItem: ApiRequest) {
        setItem(newItem);
    }

    return (
        <Container
            className='Lifecycle-container'
            data-testid='Lifecycle-container'
        >
            <DevList items={requests} row={RequestRow} onClick={onClick} />
            <DevInspector item={item} />
        </Container>
    );
}

export default Lifecycle;
