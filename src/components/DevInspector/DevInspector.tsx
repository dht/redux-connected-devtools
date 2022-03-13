import React from 'react';
import { Container } from './DevInspector.style';

export type DevInspectorProps = {};

export function DevInspector(_props: DevInspectorProps) {
    return (
        <Container className="DevInspector-container" data-testid="DevInspector-container">
            DevInspector
        </Container>
    );
}

export default DevInspector;
