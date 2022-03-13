import React from 'react';
import JsonViewer from '../components/JsonViewer/JsonViewer';
import { connectedSelectors } from 'redux-connected';
import { useSelector } from 'react-redux';

export function EndpointConfigsContainer() {
    const json = useSelector(connectedSelectors.$endpointsConfigRaw);

    return <JsonViewer json={json} />;
}

export default EndpointConfigsContainer;
