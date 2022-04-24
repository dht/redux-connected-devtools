import styled from 'styled-components';

export const Container = styled.div<{ color?: string }>`
    margin: 0 3px;
    color: ${(props) => props.color || 'inherit'};
    cursor: pointer;

    &:hover {
        color: gold;
    }
`;
