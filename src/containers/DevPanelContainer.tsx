import React from 'react';
import DevPanel from '../components/DevPanel/DevPanel';

type DevPanelProps = {
    children: JSX.Element | JSX.Element[];
};

export function DevPanelContainer(props: DevPanelProps) {
    return <DevPanel>{props.children}</DevPanel>;
}

export default DevPanelContainer;
