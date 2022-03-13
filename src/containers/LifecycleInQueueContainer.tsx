import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsInQueuePast } from '../store/selectors';

export function LifecycleInQueueContainer() {
    const requests = useSelector($requestsInQueuePast);
    return <Lifecycle requests={requests} />;
}

export default LifecycleInQueueContainer;
