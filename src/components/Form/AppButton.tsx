import React, { FC } from "react";
import { Button } from "reactstrap";
import classNames from "classnames";

type AppButtonProps = {
  clickFunction: Function;
};

export const AppButton: FC<AppButtonProps> = ({ clickFunction }) => {
  const btnClass = classNames(
    {
      chosen: false,
    },
    "btn",
    "btn-dark"
  );
  const buttonText = "Get Info";
  const onClickFunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    clickFunction();
  };

  return (
    <Button type="button" onClick={onClickFunction} className={btnClass}>
      {buttonText}
    </Button>
  );
};
