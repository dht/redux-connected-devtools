import styled from 'styled-components';

export const Container = styled.div`
    width: 190px;
    background-color: var(--gray-1);
    border-right: 1px solid var(--gray-2);
`;

export const MenuGroup = styled.div`
    border-bottom: 1px solid var(--gray-2);
`;

export const MenuGroupTitle = styled.div`
    font-size: 13px;
    padding: 5px 10px;
    border-bottom: 1px solid var(--gray-2);
    background-color: var(--white);
    opacity: 0.8;
    color: var(--gray-4);
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 10px;
    font-size: 14px;
    position: relative;
    color: var(--gray-4);

    &:nth-child(2n-1) {
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
        font-weight: bold;

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

export const Title = styled.div`
    flex: 1;
`;

export const Badge = styled.div`
    padding: 0 4px;
    font-size: 12px;
    border-radius: 7px;
    background-color: var(--white);
    border: 1px solid var(--gray-2);
    color: var(--gray-3);
`;

export const BadgeTotal = styled(Badge)``;
