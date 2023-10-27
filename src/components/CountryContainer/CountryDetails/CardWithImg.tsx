import React, { FC } from "react";
import { Card, CardHeader } from "reactstrap";
import { AppImg } from "./AppImg";

type CardCountryWithImgProps = {
  param: string;
  value?: string | number | any;
  desc?: string;
  detailId?: string;
  containImg?: boolean;
};

export const CardCountryWithImg: FC<CardCountryWithImgProps> = ({
  param,
  value,
  detailId,
}) => (
  <>
    <Card id={detailId} className="my-2, item" color="dark" inverse>
      <CardHeader>{param}</CardHeader>
      <AppImg imgName={param} imgSrc={value} />
    </Card>
  </>
);
