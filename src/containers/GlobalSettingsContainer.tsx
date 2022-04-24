import React from 'react';
import { useSelector } from 'react-redux';
import JsonViewer from '../components/JsonViewer/JsonViewer';
import { connectedSelectors } from 'redux-connected';

export function GlobalSettingsContainer() {
    const json = useSelector(connectedSelectors.$apiGlobalSettingsRaw);

    return <JsonViewer json={json} />;
}

export default GlobalSettingsContainer;
