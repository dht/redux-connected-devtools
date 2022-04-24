import styled from 'styled-components';

export const Container = styled.div`
    --white: #fff;
    --gray-1: #fafafa;
    --gray-border: #ddd;
    --gray-2: #aaa;
    --gray-3: #777;
    --gray-4: #333;
    --black: #111;

    &.darkMode {
        --black: #fff;
        --gray-4: #f1f1f1;
        --gray-3: #aaa;
        --gray-2: #777;
        --gray-border: #444;
        --gray-1: #262636;
        --white: #222233;
    }

    flex: 1;
    background-color: var(--white);
    color: var(--gray-4);
    z-index: 3;
    display: flex;
    flex-direction: column;
    min-width: 880px;
    min-height: 880px;
`;
