import styled from 'styled-components';

export const Container = styled.div<{ width?: number }>`
    flex: 1;
    max-height: 850px;
    overflow: auto;
    padding: 0 25px;
    max-width: ${(props) => (props.width ? props.width + 'px' : '680px')};
    line-height: 26px;
    color: var(--gray-4);

    &::-webkit-scrollbar {
        width: 8px;
        height: 7px;
    }

    &::-webkit-scrollbar-track {
        border: 1px solid var(--gray-border);
        background: var(--white);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--gray-border);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--gray-2);
    }
`;
