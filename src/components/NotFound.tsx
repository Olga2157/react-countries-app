import React, { FC } from "react";
import classNames from "classnames";

type NotFoundProps = {
  display?: boolean;
};

export const NotFound: FC<NotFoundProps> = ({ display }) => {
  const notFoundStyles = "d-flex justify-content-center text-black-50 pt-5";
  let notFoundClass;
  if (display) {
    notFoundClass = classNames(notFoundStyles);
  } else {
    notFoundClass = classNames("d-none");
  }

  return (
    <div className={notFoundClass}>
      <h2>Not found</h2>
    </div>
  );
};
