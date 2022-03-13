import React from 'react';
import DevInspector from '../DevInspector/DevInspector';
import DevList from '../DevList/DevList';
import { Container } from './Lifecycle.style';

export type LifecycleProps = {};

export function Lifecycle(_props: LifecycleProps) {
    return (
        <Container
            className='Lifecycle-container'
            data-testid='Lifecycle-container'
        >
            <DevList />
            <DevInspector />
        </Container>
    );
}

export default Lifecycle;
