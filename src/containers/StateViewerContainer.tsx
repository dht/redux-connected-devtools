import React from 'react';
import { useSelector } from 'react-redux';
import StateViewer from '../components/StateViewer/StateViewer';

const $i = (i: any) => i;

export function StateViewerContainer() {
    const state = useSelector($i);

    return <StateViewer state={state} />;
}

export default StateViewerContainer;
