import React from 'react';
import { useSelector } from 'react-redux';
import JsonViewer from '../components/JsonViewer/JsonViewer';

const $i = (i: any) => i;

export function StateViewerContainer() {
    const json = useSelector($i);

    return <JsonViewer json={json} />;
}

export default StateViewerContainer;
