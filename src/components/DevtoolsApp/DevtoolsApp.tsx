import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Icon from '../Icon/Icon';
import React, { useRef } from 'react';
import { Container, Header, Title } from './DevtoolsApp.style';
import { DevPanelContainer } from '../../containers/DevPanelContainer';
import { Provider } from 'react-redux';
import { useLocalStorage } from 'react-use';
import Size from '../Size/Size';

export type DevtoolsAppProps = {
    connectedStore: any;
    toggleShow: () => void;
    clearCompleted: () => void;
    downloadState: () => void;
    storeSizeInBytes?: number;
};

type Point = {
    x: number;
    y: number;
};

export function DevtoolsApp(props: DevtoolsAppProps) {
    const { connectedStore, storeSizeInBytes } = props;
    const ref = useRef(null);

    const [delta, setDelta] = useLocalStorage<Point>('DEV_PANEL_LOCATION', {
        x: 0,
        y: 0,
    });

    function onStop(_e: DraggableEvent, data: DraggableData) {
        const { x, y } = data;
        setDelta({ x, y });
    }

    return (
        <Draggable
            nodeRef={ref}
            onStop={onStop}
            defaultPosition={delta}
            handle='.header'
        >
            <Container
                ref={ref}
                className='DevtoolsApp-container'
                data-testid='DevtoolsApp-container'
            >
                <Provider store={connectedStore}>
                    <Header className='header'>
                        <Title>Devtools</Title>
                        <Size size={storeSizeInBytes} />
                        <Icon
                            name='clearAll'
                            onClick={() => props.clearCompleted()}
                        />
                        <Icon name='download' onClick={props.downloadState} />
                        <Icon name='close' onClick={props.toggleShow} />
                    </Header>
                    <DevPanelContainer />
                </Provider>
            </Container>
        </Draggable>
    );
}

export default DevtoolsApp;
