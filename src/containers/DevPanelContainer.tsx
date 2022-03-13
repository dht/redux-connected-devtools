import React from 'react';
import DevPanel from '../components/DevPanel/DevPanel';
import { $appState } from '../store/selectors';
import { useSelector } from 'react-redux';
import { connectedSelectors } from 'redux-connected';

type DevPanelProps = {};

export function DevPanelContainer(_props: DevPanelProps) {
    return <DevPanel />;
}

export default DevPanelContainer;
