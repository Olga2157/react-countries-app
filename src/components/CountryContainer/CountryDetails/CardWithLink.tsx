import React, { FC } from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { IconWithLink } from "../../common/IconWithLink";

type CardCountryWithLinkProps = {
  param: string;
  value?: string | number;
  desc?: string;
  detailId?: string;
  linkId?: string;
  mapLink?: string;
};

export const CardCountryWithLink: FC<CardCountryWithLinkProps> = ({
  param,
  value,
  desc,
  detailId,
  linkId,
  mapLink,
}) => {
  const cardLinkName = "Google Map Link";
  return (
    <>
      <Card id={detailId} className="my-2, item" color="dark" inverse>
        <CardHeader>{param}</CardHeader>
        <IconWithLink
          linkId={linkId}
          link={mapLink}
          linkName={cardLinkName}
          iconSize={56}
        />
        <CardBody>
          <CardTitle tag="h5">{value}</CardTitle>
          <CardText>{desc}</CardText>
        </CardBody>
      </Card>
    </>
  );
};
