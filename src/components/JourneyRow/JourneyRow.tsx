import React from 'react';
import Time from '../Time/Time';
import { Container, Status, DataIcon, Delta, Flex } from './JourneyRow.style';
import { JourneyPoint, LifecycleStatus } from 'redux-connected';

export type JourneyRowProps = {
    point: JourneyPoint;
};

const statusMap: Record<LifecycleStatus, string> = {
    [LifecycleStatus.RECEIVED]: 'Received',
    [LifecycleStatus.IN_QUEUE]: 'In queue',
    [LifecycleStatus.GENERAL_ERROR]: 'General error',
    [LifecycleStatus.PENDING_API_RESPONSE]: 'Pending API',
    [LifecycleStatus.API_ERROR]: 'API error',
    [LifecycleStatus.POST_ACTION]: 'Post action',
};

export function JourneyRow(props: JourneyRowProps) {
    const { point } = props;
    const { status, timestamp, data, delta = '' } = point;

    function printPoint() {
        console.log(data);
    }

    function renderDataIcon() {
        if (!data) {
            return null;
        }

        return <DataIcon>D</DataIcon>;
    }

    function renderDelta() {
        if (!delta) {
            return null;
        }

        return <Delta>+{delta.toLocaleString()}</Delta>;
    }

    return (
        <Container
            className='JourneyRow-container'
            data-testid='JourneyRow-container'
            onClick={printPoint}
        >
            <Status>{statusMap[status]}</Status>
            {renderDataIcon()}
            <Flex />
            {renderDelta()}
            <Time value={timestamp} />
        </Container>
    );
}

export default JourneyRow;
