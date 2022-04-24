import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    border-top: 1px solid #333;
    max-height: 380px;
    overflow-y: scroll;

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
`;
