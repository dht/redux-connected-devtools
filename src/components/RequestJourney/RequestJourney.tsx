import React from 'react';
import { Container } from './RequestJourney.style';
import { ApiRequest, JourneyPoint } from 'redux-connected';
import JourneyRow from '../JourneyRow/JourneyRow';

export type RequestJourneyProps = {
    item: ApiRequest;
};

export function RequestJourney(props: RequestJourneyProps) {
    const { item } = props;

    function renderItem(point: JourneyPoint, index: number) {
        return <JourneyRow key={index} point={point} />;
    }

    function renderItems() {
        return item.items.map((point: JourneyPoint, index: number) =>
            renderItem(point, index)
        );
    }

    return (
        <Container
            className='RequestJourney-container'
            data-testid='RequestJourney-container'
        >
            {renderItems()}
        </Container>
    );
}

export default RequestJourney;
