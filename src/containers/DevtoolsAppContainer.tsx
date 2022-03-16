import React from 'react';
import DevtoolsApp from '../components/DevtoolsApp/DevtoolsApp';
import { useKey, useToggle } from 'react-use';
import { clearCompletedRequests, clearFailedRequests } from 'redux-connected';
import { getMinutes, resetStartOfTime } from '../utils/date';
import { download } from '../utils/download';
import { useStoreSize } from '../hooks/useStoreSize';

export type DevtoolsAppProps = {
    connectedStore: any;
};

export function DevtoolsAppContainer(props: DevtoolsAppProps) {
    const { connectedStore } = props;
    const [show, toggleShow] = useToggle(false);
    const storeSizeInBytes = useStoreSize(connectedStore);

    useKey('`', toggleShow, {}, []);

    if (!show) {
        return null;
    }

    function clearCompleted() {
        connectedStore.dispatch(clearCompletedRequests());
        connectedStore.dispatch(clearFailedRequests());
        // also reset time
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
            clearCompleted={clearCompleted}
            downloadState={downloadState}
            toggleShow={toggleShow}
            storeSizeInBytes={storeSizeInBytes}
        />
    );
}

export default DevtoolsAppContainer;
