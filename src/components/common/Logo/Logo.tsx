import React, { FC } from "react";
import classNames from "classnames";
import "./Logo.scss";

export const Logo: FC = () => {
  const logo = classNames("logo-message");
  const logoHeader = classNames("logo-header");

  return (
    <p className={logo}>
      <strong className={logoHeader}>countries</strong>
      <br />
      The free encyclopedia
    </p>
  );
};
