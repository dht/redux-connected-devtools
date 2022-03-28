import styled from 'styled-components';

export const Container = styled.div<{ index: number }>`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

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
            pointer-events: none;
        }
    }

    &.selected {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 171, 85);
            opacity: 0.1;
        }
    }
`;

export const Col = styled.div`
    &:first-child {
        flex: 1;
    }
`;

export const Id = styled.div`
    font-size: 16px;
    color: var(--gray-2);
`;

export const Type = styled.div``;
