import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsPostActionPast } from '../store/selectors';

export function LifecyclePostActionContainer() {
    const requests = useSelector($requestsPostActionPast);
    return <Lifecycle requests={requests} />;
}

export default LifecyclePostActionContainer;
