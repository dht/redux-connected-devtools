import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: fixed;
    width: 880px;
    height: 900px;
    bottom: 50px;
    right: 50px;
    background-color: #223;
    box-shadow: 0 0 5px 7px rgba(0, 0, 0, 0.4);
    z-index: 3;
    color: #eee;
    display: flex;
    flex-direction: column;
    border: 2px solid #556;
`;

export const Header = styled.div`
    flex: 1;
    max-height: 44px;
    height: 44px;
    padding: 5px;
    color: #eee;
    text-indent: 5px;
    display: flex;
    flex-direction: row;
    padding-right: 10px;
    align-items: center;
    border-bottom: 1px solid #555;
    cursor: move;
`;

export const Title = styled.div`
    color: #eee;
    flex: 1;
`;
