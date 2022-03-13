import styled from 'styled-components';

export const Container = styled.div<{ index: number }>`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: ${(props) =>
        props.index % 2 === 1 ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
    }
`;

export const Col = styled.div`
    &:first-child {
        flex: 1;
    }
`;

export const Id = styled.div`
    color: goldenrod;
    font-size: 16px;
`;

export const Type = styled.div`
    color: brown;
`;
