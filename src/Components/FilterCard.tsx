import {
  Card, CardBody, CardHeader, Divider, Text,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function FilterCard({ title, children }: { title: string, children: ReactNode }) {
  return (
    <Card>
      <CardHeader textAlign="center" p={1}>
        <Text size="xl">{title}</Text>
      </CardHeader>
      <Divider mt={0} />
      <CardBody overflowY="auto" maxH="226px">
        {children || 'CardBody'}
      </CardBody>

    </Card>
  );
}
