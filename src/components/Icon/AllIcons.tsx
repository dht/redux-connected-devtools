import React from 'react';

export type IconName = 'download' | 'close' | 'clearAll';

type IconProps = {
    size?: number;
};

const Download = (props: IconProps) => {
    const { size = 24 } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={`${size}px`}
            height={`${size}px`}
            fill='currentColor'
        >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
        </svg>
    );
};

const Close = (props: IconProps) => {
    const { size = 24 } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={`${size}px`}
            height={`${size}px`}
            fill='currentColor'
        >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        </svg>
    );
};

const ClearAll = (props: IconProps) => {
    const { size = 24 } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={`${size}px`}
            height={`${size}px`}
            fill='currentColor'
        >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z' />
        </svg>
    );
};

type Icons = Record<IconName, React.FC<IconProps>>;

export const allIcons: Icons = {
    close: Close,
    clearAll: ClearAll,
    download: Download,
};
