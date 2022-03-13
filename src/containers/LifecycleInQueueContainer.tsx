import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsInQueue } from '../store/selectors';

export function LifecycleInQueueContainer() {
    const requests = useSelector($requestsInQueue);
    return <Lifecycle requests={requests} />;
}

export default LifecycleInQueueContainer;
