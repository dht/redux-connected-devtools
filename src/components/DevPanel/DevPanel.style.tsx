import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    color: var(--text-color);
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    flex: 1;
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
