import React, { FC } from "react";
import { IconWithLink } from "../common/IconWithLink";
import "./Footer.scss";

export const Footer: FC = () => (
  <footer>
    <p>Author: Olga Goliakova</p>
    <IconWithLink
      linkId="github"
      link="https://github.com/Olga2157"
      linkName="GitHub"
      iconSize={26}
    />
    <IconWithLink
      linkId="linkedin"
      link="https://www.linkedin.com/in/olgagoliakova/"
      linkName="LinkedIn"
      iconSize={26}
    />
  </footer>
);
