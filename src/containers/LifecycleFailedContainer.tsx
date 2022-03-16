import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsFailed } from '../store/selectors';

export function LifecycleFailedContainer() {
    const requests = useSelector($requestsFailed);
    return <Lifecycle requests={requests} />;
}

export default LifecycleFailedContainer;
