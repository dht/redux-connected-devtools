import React from 'react';
import { Container } from './DevInspector.style';
import { ApiRequest } from 'redux-connected';
import RequestJourney from '../RequestJourney/RequestJourney';
import RequestDetails from '../RequestDetails/RequestDetails';

export type DevInspectorProps = {
    item?: ApiRequest;
};

export function DevInspector(props: DevInspectorProps) {
    const { item } = props;

    if (!item) {
        return (
            <Container
                className='DevInspector-container'
                data-testid='DevInspector-container'
            ></Container>
        );
    }

    return (
        <Container
            className='DevInspector-container'
            data-testid='DevInspector-container'
        >
            <RequestDetails item={item} />
            <RequestJourney item={item} />
        </Container>
    );
}

export default DevInspector;
