import React from 'react';
import { startOfTime } from '../../utils/date';
import { Container, Full, Fraction } from './Time.style';

export type TimeProps = {
    value: number;
};

export function Time(props: TimeProps) {
    const { value } = props;

    const relativeValue = (value - startOfTime) / 1000;

    const full = Math.floor(relativeValue);
    const fraction = (relativeValue - full).toFixed(3).split('.').pop();

    return (
        <Container className='Time-container' data-testid='Time-container'>
            <Full>{full}</Full>
            <Fraction>{fraction}</Fraction>
        </Container>
    );
}

export default Time;
