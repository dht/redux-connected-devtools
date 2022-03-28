import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    max-height: 380px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
        height: 7px;
    }

    &::-webkit-scrollbar-track {
        border-top: 1px solid var(--gray-2);
        border-right: 1px solid var(--gray-2);
        border-left: 1px solid var(--gray-2);
        background: var(--white);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--gray-2);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--gray-3);
    }
`;
