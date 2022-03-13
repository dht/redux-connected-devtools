import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';
import { $requestsGeneralError } from '../store/selectors';

export function LifecycleGeneralErrorContainer() {
    const requests = useSelector($requestsGeneralError);
    return <Lifecycle requests={requests} />;
}

export default LifecycleGeneralErrorContainer;
