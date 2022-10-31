import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;

    &:nth-child(2n-1) {
        background-color: rgba(0, 0, 0, 0.2);
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;

export const Status = styled.div`
    color: #aaa;
`;

export const DataIcon = styled.div`
    background-color: #000;
    padding: 3px 7px;
    font-size: 13px;
    font-weight: bold;
    color: purple;
    border-radius: 5px;
    ${(props) => props.theme.marginLeft('10px')}
`;

export const Delta = styled.div`
    font-size: 13px;
    width: 60px;
    font-weight: bold;
    color: olive;
    ${(props) => props.theme.marginRight('10px')}
    text-align: center;
    font-family: monospace;
`;

export const Flex = styled.div`
    flex: 1;
`;
