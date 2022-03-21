import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    color: #eee;
    background-color: #232332;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
`;

export const Actions = styled.div`
    position: absolute;
    bottom: 5px;
    left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
