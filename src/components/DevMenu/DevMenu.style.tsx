import styled from 'styled-components';

export const Container = styled.div`
    width: 220px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const MenuGroup = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const MenuGroupTitle = styled.div`
    font-size: 13px;
    padding: 5px 10px;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 10px;
    font-size: 14px;
    color: ${(props) =>
        props.selected ? 'gold' : 'rgba(255, 255, 255, 0.89)'};
    background-color: ${(props) =>
        props.selected ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
`;

export const Title = styled.div`
    flex: 1;
`;

export const Badge = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 10px;
    font-size: 13px;
    border-radius: 7px;
`;

export const Version = styled.div`
    position: fixed;
    bottom: 5px;
    left: 5px;
`;
