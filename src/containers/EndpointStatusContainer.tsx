import React from 'react';
import JsonViewer from '../components/JsonViewer/JsonViewer';
import { connectedSelectors } from 'redux-connected';
import { useSelector } from 'react-redux';

export function EndpointStatusContainer() {
    const json = useSelector(connectedSelectors.$endpointsStateRaw);

    return <JsonViewer json={json} />;
}

export default EndpointStatusContainer;
