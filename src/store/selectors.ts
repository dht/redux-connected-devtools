import { createSelector } from 'reselect';
import { connectedSelectors, LifecycleStatus } from 'redux-connected';

export const $requests = createSelector(
    connectedSelectors.$requests,
    (requests) => {
        return requests
            .map((request) => {
                const { items } = request;

                const lastPoint = items[items.length - 1] || {};

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
                    items: journeyWithDelta,
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
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return lastPoint && lastPoint.status === LifecycleStatus.RECEIVED;
    });
});

export const $requestsReceivedPast = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;

        return items.find((point) => point.status === LifecycleStatus.RECEIVED);
    });
});

// 2
export const $requestsInQueue = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return lastPoint && lastPoint.status === LifecycleStatus.IN_QUEUE;
    });
});

export const $requestsInQueuePast = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        return items.find((point) => point.status === LifecycleStatus.IN_QUEUE);
    });
});

// 3
export const $requestsPendingApi = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return (
            lastPoint &&
            lastPoint.status === LifecycleStatus.PENDING_API_RESPONSE
        );
    });
});

export const $requestsPendingApiPast = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;

        return items.find(
            (point) => point.status === LifecycleStatus.PENDING_API_RESPONSE
        );
    });
});

// 4
export const $requestsPostAction = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return lastPoint && lastPoint.status === LifecycleStatus.POST_ACTION;
    });
});

export const $requestsPostActionPast = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;

        return items.find(
            (point) => point.status === LifecycleStatus.POST_ACTION
        );
    });
});

// e1
export const $requestsGeneralError = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return lastPoint && lastPoint.status === LifecycleStatus.GENERAL_ERROR;
    });
});

export const $requestsGeneralErrorPast = createSelector(
    $requests,
    (requests) => {
        return requests.filter((request) => {
            const { items } = request;

            return items.find(
                (point) => point.status === LifecycleStatus.GENERAL_ERROR
            );
        });
    }
);

// e2
export const $requestsApiError = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;
        const lastPoint = items[items.length - 1];
        return lastPoint && lastPoint.status === LifecycleStatus.API_ERROR;
    });
});

export const $requestsApiErrorPast = createSelector($requests, (requests) => {
    return requests.filter((request) => {
        const { items } = request;

        return items.find(
            (point) => point.status === LifecycleStatus.API_ERROR
        );
    });
});

export const $menuBadges = createSelector(
    $requestsReceived,
    $requestsInQueue,
    $requestsGeneralError,
    $requestsPendingApi,
    $requestsApiError,
    $requestsPostAction,
    (
        requestsReceived,
        requestsInQueue,
        requestsGeneralError,
        requestsPendingApi,
        requestsApiError,
        requestsPostAction
    ) => {
        return {
            lifecycleReceived: requestsReceived.length,
            lifecycleInQueue: requestsInQueue.length,
            lifecycleGeneralError: requestsGeneralError.length,
            lifecyclePendingApi: requestsPendingApi.length,
            lifecycleApiError: requestsApiError.length,
            lifecyclePostAction: requestsPostAction.length,
        };
    }
);

export const $menuBadgesTotal = createSelector(
    $requestsReceivedPast,
    $requestsInQueuePast,
    $requestsGeneralErrorPast,
    $requestsPendingApiPast,
    $requestsApiErrorPast,
    $requestsPostActionPast,
    (
        requestsReceived,
        requestsInQueue,
        requestsGeneralError,
        requestsPendingApi,
        requestsApiError,
        requestsPostAction
    ) => {
        return {
            lifecycleReceived: requestsReceived.length,
            lifecycleInQueue: requestsInQueue.length,
            lifecycleGeneralError: requestsGeneralError.length,
            lifecyclePendingApi: requestsPendingApi.length,
            lifecycleApiError: requestsApiError.length,
            lifecyclePostAction: requestsPostAction.length,
        };
    }
);
