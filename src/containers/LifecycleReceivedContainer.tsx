import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsReceived } from '../store/selectors';

export function LifecycleReceivedContainer() {
    const requests = useSelector($requestsReceived);
    return <Lifecycle requests={requests} />;
}

export default LifecycleReceivedContainer;
