import React from 'react';
import DevPanel from '../components/DevPanel/DevPanel';
import { $appState } from '../store/selectors';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';

export function DevPanelContainer() {
    return <DevPanel />;
}

export default DevPanelContainer;
