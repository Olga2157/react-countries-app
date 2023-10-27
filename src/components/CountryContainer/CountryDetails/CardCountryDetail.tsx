import React, { FC } from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

type CardCountryDetailProps = {
  param: string;
  value?: string | number;
  desc?: string;
  detailId?: string;
};

export const CardCountryDetail: FC<CardCountryDetailProps> = ({
  param,
  value,
  desc,
  detailId,
}) => (
  <Card id={detailId} className="item" color="dark" inverse>
    <CardHeader>{param}</CardHeader>
    <CardBody>
      <CardTitle tag="h5">{value}</CardTitle>
      <CardText>{desc}</CardText>
    </CardBody>
  </Card>
);
