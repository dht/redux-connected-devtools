import JsonViewerContainer from '../containers/JsonViewerContainer';
import LifecycleReceivedContainer from '../containers/LifecycleReceivedContainer';
import StateViewerContainer from '../containers/StateViewerContainer';
import GlobalStatsContainer from '../containers/GlobalStatsContainer';
import EndpointConfigsContainer from '../containers/EndpointConfigsContainer';
import GlobalSettingsContainer from '../containers/GlobalSettingsContainer';
import EndpointStatusContainer from '../containers/EndpointStatusContainer';
import LifecycleInQueueContainer from '../containers/LifecycleInQueueContainer';
import LifecycleGeneralErrorContainer from '../containers/LifecycleGeneralErrorContainer';
import LifecyclePendingApiContainer from '../containers/LifecyclePendingApiContainer';
import LifecycleApiErrorContainer from '../containers/LifecycleApiErrorContainer';
import LifecyclePostActionContainer from '../containers/LifecyclePostActionContainer';

type DevComponents = Record<string, React.FC<any>>;

export const devComponents: DevComponents = {
    LifecycleReceived: LifecycleReceivedContainer,
    LifecycleInQueue: LifecycleInQueueContainer,
    LifecycleGeneralError: LifecycleGeneralErrorContainer,
    LifecyclePendingApi: LifecyclePendingApiContainer,
    LifecycleApiError: LifecycleApiErrorContainer,
    LifecyclePostAction: LifecyclePostActionContainer,
    JsonViewer: JsonViewerContainer,
    StateViewer: StateViewerContainer,
    GlobalSettings: GlobalSettingsContainer,
    GlobalStats: GlobalStatsContainer,
    EndpointConfigs: EndpointConfigsContainer,
    EndpointStatus: EndpointStatusContainer,
};
