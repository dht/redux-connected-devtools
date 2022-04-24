import React from 'react';
import { useSelector } from 'react-redux';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsPendingApiPast } from '../store/selectors';

export function LifecyclePendingApiContainer() {
    const requests = useSelector($requestsPendingApiPast);
    return <Lifecycle requests={requests} />;
}

export default LifecyclePendingApiContainer;
