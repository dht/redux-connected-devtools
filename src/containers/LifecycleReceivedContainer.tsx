import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsReceivedPast } from '../store/selectors';

export function LifecycleReceivedContainer() {
    const requests = useSelector($requestsReceivedPast);
    return <Lifecycle requests={requests} />;
}

export default LifecycleReceivedContainer;
