import JsonViewerContainer from '../containers/JsonViewerContainer';
import LifecycleContainer from '../containers/LifecycleContainer';
import LogsViewerContainer from '../containers/LogsViewerContainer';
import StateViewerContainer from '../containers/StateViewerContainer';

type DevComponents = Record<string, React.FC<any>>;

export const devComponents: DevComponents = {
    Lifecycle: LifecycleContainer,
    JsonViewer: JsonViewerContainer,
    StateViewer: StateViewerContainer,
    LogsViewer: LogsViewerContainer,
    SagaViewer: LogsViewerContainer,
};
