import React from 'react';
import { allIcons, IconName } from './AllIcons';
import { Container } from './Icon.style';

export type IconProps = {
    name: IconName;
    color?: string;
    size?: number;
    onClick?: () => void;
};

export function Icon(props: IconProps) {
    const { name, size = 20, color } = props;
    const Cmp = allIcons[name];

    return (
        <Container
            className='Icon-container'
            data-testid='Icon-container'
            color={color}
            onClick={props.onClick}
        >
            <Cmp size={size} />
        </Container>
    );
}

export default Icon;
