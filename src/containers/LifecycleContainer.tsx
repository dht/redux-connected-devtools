import React from 'react';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';
import Lifecycle from '../components/Lifecycle/Lifecycle';

export function LifecycleContainer() {
    return <Lifecycle />;
}

export default LifecycleContainer;
