import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsPostAction } from '../store/selectors';

export function LifecyclePostActionContainer() {
    const requests = useSelector($requestsPostAction);
    return <Lifecycle requests={requests} />;
}

export default LifecyclePostActionContainer;
