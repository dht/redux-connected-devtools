import React from 'react';
import { Container } from './Size.style';
import bytes from 'bytes';
import { useMemo } from 'react';

export type SizeProps = {
    size?: number;
};

export function Size(props: SizeProps) {
    const { size = 0 } = props;
    const sizeText = useMemo(() => bytes(size), [size]);

    return (
        <Container className='Size-container' data-testid='Size-container'>
            {!size ? '-' : sizeText}
        </Container>
    );
}

export default Size;
