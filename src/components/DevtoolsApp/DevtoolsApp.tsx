import Icon from '../Icon/Icon';
import React, { useRef } from 'react';
import { Container } from './DevtoolsApp.style';
import { DevPanelContainer } from '../../containers/DevPanelContainer';
import { Provider } from 'react-redux';
import Size from '../Size/Size';

export type DevtoolsAppProps = {
    connectedStore: any;
    clearRequests: () => void;
    downloadState: () => void;
    storeSizeInBytes?: number;
};

export function DevtoolsApp(props: DevtoolsAppProps) {
    const { connectedStore, storeSizeInBytes } = props;
    const ref = useRef(null);

    return (
        <Container
            ref={ref}
            className='DevtoolsApp-container'
            data-testid='DevtoolsApp-container'
        >
            <Provider store={connectedStore}>
                <DevPanelContainer>
                    <Size size={storeSizeInBytes} />
                    <Icon
                        name='clearAll'
                        onClick={() => props.clearRequests()}
                    />
                    <Icon name='download' onClick={props.downloadState} />
                </DevPanelContainer>
            </Provider>
        </Container>
    );
}

export default DevtoolsApp;
