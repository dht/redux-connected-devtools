import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsApiError } from '../store/selectors';

export function LifecycleApiErrorContainer() {
    const requests = useSelector($requestsApiError);
    return <Lifecycle requests={requests} />;
}

export default LifecycleApiErrorContainer;
