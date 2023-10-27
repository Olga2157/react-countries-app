import React, { FC } from "react";

type AppImgProps = {
  imgName: string;
  imgSrc: string;
};

export const AppImg: FC<AppImgProps> = ({ imgName, imgSrc }) => (
  <img alt={imgName} title={imgName} src={imgSrc} />
);
