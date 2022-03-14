export const timestamp = () => new Date().getTime();

export let startOfTime = timestamp();

export const resetStartOfTime = () => {
    startOfTime = timestamp();
};

export const getMinutes = () => {
    return new Date().getMinutes();
};
