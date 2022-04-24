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
        border-left: 1px solid var(--gray-border);
        background: var(--white);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--gray-border);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--gray-2);
    }
`;
