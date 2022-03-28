import React from 'react';
import DevtoolsApp from '../components/DevtoolsApp/DevtoolsApp';
import { clearCompletedRequests, clearFailedRequests } from 'redux-connected';
import { getMinutes, resetStartOfTime } from '../utils/date';
import { download } from '../utils/download';
import { useStoreSize } from '../hooks/useStoreSize';

export type DevtoolsAppProps = {
    connectedStore: any;
    isDarkMode?: boolean;
};

export function DevtoolsAppContainer(props: DevtoolsAppProps) {
    const { connectedStore, isDarkMode } = props;
    const storeSizeInBytes = useStoreSize(connectedStore);

    function clearRequests() {
        connectedStore.dispatch(clearCompletedRequests());
        connectedStore.dispatch(clearFailedRequests());
        // also resets time
        resetStartOfTime();
    }

    function downloadState() {
        const state = connectedStore.getState();
        const minutes = getMinutes();
        const filename = `state_${minutes}.json`;
        download(filename, state);
    }

    return (
        <DevtoolsApp
            connectedStore={connectedStore}
            clearRequests={clearRequests}
            downloadState={downloadState}
            storeSizeInBytes={storeSizeInBytes}
            isDarkMode={isDarkMode}
        />
    );
}

export default DevtoolsAppContainer;
