import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {
  error: string;
};

export const FetchError: FC<Props> = ({ error }) => {
  return (
    <Card>
      <CardHeader>Something went wrong</CardHeader>
      <CardBody>
        <Text>{error}</Text>
      </CardBody>
    </Card>
  );
};
