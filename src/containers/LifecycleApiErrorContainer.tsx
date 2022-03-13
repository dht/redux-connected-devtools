import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsApiErrorPast } from '../store/selectors';

export function LifecycleApiErrorContainer() {
    const requests = useSelector($requestsApiErrorPast);
    return <Lifecycle requests={requests} />;
}

export default LifecycleApiErrorContainer;
