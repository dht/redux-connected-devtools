import JsonViewerContainer from '../containers/JsonViewerContainer';
import LifecycleContainer from '../containers/LifecycleContainer';
import LogsViewerContainer from '../containers/LogsViewerContainer';
import StateViewerContainer from '../containers/StateViewerContainer';
import GlobalStatsContainer from '../containers/GlobalStatsContainer';
import EndpointConfigsContainer from '../containers/EndpointConfigsContainer';
import GlobalSettingsContainer from '../containers/GlobalSettingsContainer';
import EndpointStatusContainer from '../containers/EndpointStatusContainer';

type DevComponents = Record<string, React.FC<any>>;

export const devComponents: DevComponents = {
    Lifecycle: LifecycleContainer,
    JsonViewer: JsonViewerContainer,
    StateViewer: StateViewerContainer,
    LogsViewer: LogsViewerContainer,
    SagaViewer: LogsViewerContainer,
    GlobalSettings: GlobalSettingsContainer,
    GlobalStats: GlobalStatsContainer,
    EndpointConfigs: EndpointConfigsContainer,
    EndpointStatus: EndpointStatusContainer,
};
