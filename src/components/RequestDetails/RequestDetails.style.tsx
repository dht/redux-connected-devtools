import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 20px;
    border-bottom: 1px solid var(--gray-2);
`;

export const Table = styled.table``;

export const Tr = styled.tr``;

export const Td = styled.td`
    &:first-child {
        text-align: right;
        padding-right: 10px;
        color: var(--gray-2);
    }

    color: var(--gray-4);
`;
