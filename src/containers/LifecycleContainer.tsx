import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';

export function LifecycleContainer() {
    const actionLogs = useSelector(connectedSelectors.$actionLogsByLifecycle);

    return <Lifecycle />;
}

export default LifecycleContainer;
