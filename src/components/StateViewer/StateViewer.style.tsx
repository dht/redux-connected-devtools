import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    max-height: 850px;
    overflow: auto;
    padding: 0 25px;
    max-width: 680px;

    &::-webkit-scrollbar {
        width: 8px;
        height: 7px;
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
