import React from 'react';
import { Json } from '../../types';
import { Container } from './StateViewer.style';

export type StateViewerProps = {
    state: Json;
};

export function StateViewer(props: StateViewerProps) {
    const { state } = props;

    return (
        <Container
            className='StateViewer-container'
            data-testid='StateViewer-container'
        >
            <pre>{JSON.stringify(state, null, 4)}</pre>
        </Container>
    );
}

export default StateViewer;
