import React from 'react';
import { useSelector } from 'react-redux';
import JsonViewer from '../components/JsonViewer/JsonViewer';
import { connectedSelectors } from 'redux-connected';

export function GlobalStatsContainer() {
    const json = useSelector(connectedSelectors.$apiGlobalStatsRaw);

    return <JsonViewer json={json} />;
}

export default GlobalStatsContainer;
