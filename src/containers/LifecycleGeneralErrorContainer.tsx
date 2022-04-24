import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsGeneralErrorPast } from '../store/selectors';

export function LifecycleGeneralErrorContainer() {
    const requests = useSelector($requestsGeneralErrorPast);
    return <Lifecycle requests={requests} />;
}

export default LifecycleGeneralErrorContainer;
