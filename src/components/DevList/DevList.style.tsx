import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    border-right: 1px solid var(--gray-border);
    color: var(--gray-4);

    .list {
        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #333;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #555;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #666;
        }
    }
`;

export const Empty = styled.div`
    margin: 30px;
    font-size: 17px;
    text-align: center;
`;
