import React from 'react';
import { Json } from '../../types';
import { Container } from './JsonViewer.style';

export type JsonViewerProps = {
    json: Json;
};

export function JsonViewer(props: JsonViewerProps) {
    const { json } = props;

    return (
        <Container
            className='JsonViewer-container'
            data-testid='JsonViewer-container'
        >
            <pre>{JSON.stringify(json, null, 4)}</pre>
        </Container>
    );
}

export default JsonViewer;
