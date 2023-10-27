import React, { FC } from "react";
import { Badge } from "reactstrap";
import * as Icon from "react-bootstrap-icons";

type IconWithLinkProps = {
  linkId?: string;
  link?: string;
  linkName?: string;
  iconSize?: number;
};

export const IconWithLink: FC<IconWithLinkProps> = ({
  linkId,
  link,
  linkName,
  iconSize,
}) => {
  const iconColor = "skyblue";
  let icon;
  if (linkId === "map") {
    icon = <Icon.Google title={linkName} color={iconColor} size={iconSize} />;
  } else if (linkId === "github") {
    icon = <Icon.Github title={linkName} color={iconColor} size={iconSize} />;
  } else if (linkId === "linkedin") {
    icon = <Icon.Linkedin title={linkName} color={iconColor} size={iconSize} />;
  } else {
    icon = "";
  }

  return (
    <>
      <Badge color="dark" href={link} target="_blank">
        {icon}
      </Badge>
    </>
  );
};
