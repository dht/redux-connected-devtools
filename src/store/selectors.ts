import { createSelector } from 'reselect';
import { connectedSelectors, LifecycleStatus } from 'redux-connected';

export const $requests = createSelector(
    connectedSelectors.$requests,
    (requests) => {
        return requests
            .map((request) => {
                const { items } = request;

                const lastPoint = items[items.length - 1];

                const journeyWithDelta = items.map((point, index) => {
                    const nextPoint = items[index + 1] || point;
                    const delta = nextPoint.timestamp - point.timestamp;

                    return {
                        ...point,
                        delta,
                    };
                });

                return {
                    ...request,
                    journey: journeyWithDelta,
                    lastPointTimestamp: lastPoint.timestamp,
                    lastPointStatus: lastPoint.status,
                };
            })
            .sort((a: any, b: any) => {
                if (a.lastPointTimestamp === b.lastPointTimestamp) {
                    return 0;
                }

                return a.lastPointTimestamp > b.lastPointTimestamp ? -1 : 1;
            });
    }
);

// 1
export const $requestsReceived = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.RECEIVED
        );
    });
});

// 2
export const $requestsInQueue = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.IN_QUEUE
        );
    });
});

// 3
export const $requestsGeneralError = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.GENERAL_ERROR
        );
    });
});

// 4
export const $requestsPendingApi = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.PENDING_API_RESPONSE
        );
    });
});

// 5
export const $requestsApiError = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.API_ERROR
        );
    });
});

// 6
export const $requestsPostAction = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { journey } = request;

        return journey.find(
            (point) => point.status === LifecycleStatus.POST_ACTION
        );
    });
});
