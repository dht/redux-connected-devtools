import React from 'react';
import { Container, Table, Tr, Td } from './RequestDetails.style';
import { ApiRequest } from 'redux-connected';
import JsonViewer from '../JsonViewer/JsonViewer';

export type RequestDetailsProps = {
    item: ApiRequest;
};

export function RequestDetails(props: RequestDetailsProps) {
    const { item } = props;

    return (
        <Container
            className='RequestDetails-container'
            data-testid='RequestDetails-container'
        >
            <Table>
                <tbody>
                    <Tr>
                        <Td>sequence</Td>
                        <Td>{item.sequence}</Td>
                    </Tr>
                    <Tr>
                        <Td>id</Td>
                        <Td>{item.shortId}</Td>
                    </Tr>
                    <Tr>
                        <Td>apiVerb</Td>
                        <Td>{item.argsApiVerb}</Td>
                    </Tr>
                    <Tr>
                        <Td>connection</Td>
                        <Td>{item.argsConnectionType}</Td>
                    </Tr>
                    <Tr>
                        <Td>duration</Td>
                        <Td>{item.apiDuration}</Td>
                    </Tr>
                    <Tr>
                        <Td>nodeName</Td>
                        <Td>{item.argsNodeName}</Td>
                    </Tr>
                    <Tr>
                        <Td>responseSize</Td>
                        <Td>{item.apiResponseSize}</Td>
                    </Tr>
                </tbody>
            </Table>

            <JsonViewer width={290} json={item.originalAction} />
        </Container>
    );
}

export default RequestDetails;
