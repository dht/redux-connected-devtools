import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsPendingApi } from '../store/selectors';

export function LifecyclePendingApiContainer() {
    const requests = useSelector($requestsPendingApi);
    return <Lifecycle requests={requests} />;
}

export default LifecyclePendingApiContainer;
