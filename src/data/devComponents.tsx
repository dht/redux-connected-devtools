import LifecycleReceivedContainer from '../containers/LifecycleReceivedContainer';
import GlobalStatsContainer from '../containers/GlobalStatsContainer';
import EndpointConfigsContainer from '../containers/EndpointConfigsContainer';
import GlobalSettingsContainer from '../containers/GlobalSettingsContainer';
import EndpointStatusContainer from '../containers/EndpointStatusContainer';
import LifecycleInQueueContainer from '../containers/LifecycleInQueueContainer';
import LifecycleGeneralErrorContainer from '../containers/LifecycleGeneralErrorContainer';
import LifecyclePendingApiContainer from '../containers/LifecyclePendingApiContainer';
import LifecycleApiErrorContainer from '../containers/LifecycleApiErrorContainer';
import LifecyclePostActionContainer from '../containers/LifecyclePostActionContainer';
import LifecycleFailedContainer from '../containers/LifecycleFailedContainer';

type DevComponents = Record<string, React.FC<any>>;

export const devComponents: DevComponents = {
    LifecycleReceived: LifecycleReceivedContainer,
    LifecycleInQueue: LifecycleInQueueContainer,
    LifecycleGeneralError: LifecycleGeneralErrorContainer,
    LifecyclePendingApi: LifecyclePendingApiContainer,
    LifecycleApiError: LifecycleApiErrorContainer,
    LifecycleFailed: LifecycleFailedContainer,
    LifecyclePostAction: LifecyclePostActionContainer,
    GlobalSettings: GlobalSettingsContainer,
    GlobalStats: GlobalStatsContainer,
    EndpointConfigs: EndpointConfigsContainer,
    EndpointStatus: EndpointStatusContainer,
};
