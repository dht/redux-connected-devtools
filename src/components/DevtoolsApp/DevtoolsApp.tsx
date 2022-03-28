import Icon from '../Icon/Icon';
import React, { useRef } from 'react';
import { Container } from './DevtoolsApp.style';
import { DevPanelContainer } from '../../containers/DevPanelContainer';
import { Provider } from 'react-redux';
import Size from '../Size/Size';
import classnames from 'classnames';

export type DevtoolsAppProps = {
    connectedStore: any;
    clearRequests: () => void;
    downloadState: () => void;
    storeSizeInBytes?: number;
    isDarkMode?: boolean;
};

export function DevtoolsApp(props: DevtoolsAppProps) {
    const { connectedStore, storeSizeInBytes, isDarkMode } = props;
    const ref = useRef(null);

    const className = classnames('DevtoolsApp-container', {
        darkMode: isDarkMode,
    });

    return (
        <Container
            ref={ref}
            className={className}
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
