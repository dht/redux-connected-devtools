import { debounce } from 'lodash';
import { useState } from 'react';
import { useEffect } from 'react';

type Callback = () => void;

interface ReduxStore {
    getState: () => Json;
    subscribe: (callback: Callback) => void;
}

export const useStoreSize = (store: ReduxStore) => {
    const [storeSize, setStoreSize] = useState<number>();

    const calculateSize = debounce(() => {
        const state = store.getState();
        const size = JSON.stringify(state).length;
        setStoreSize(size);
    }, 500);

    useEffect(() => {
        store.subscribe(() => {
            calculateSize();
        });
    }, [store]);

    return storeSize;
};
