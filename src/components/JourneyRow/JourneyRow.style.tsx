import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid var(--gray-2);
    position: relative;
    color: var(--gray-4);

    &:nth-child(2n-1) {
        background-color: var(--gray-1);
    }

    &:hover {
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 171, 85);
            opacity: 0.05;
        }
    }
`;

export const Status = styled.div``;

export const DataIcon = styled.div`
    padding: 3px 7px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    margin-left: 10px;
    background-color: var(--white);
    border: 1px solid var(--gray-2);
`;

export const Delta = styled.div`
    font-size: 13px;
    width: 60px;
    font-weight: bold;
    margin-right: 10px;
    text-align: center;
    font-family: monospace;
`;

export const Flex = styled.div`
    flex: 1;
`;
