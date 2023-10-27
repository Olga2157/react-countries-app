import React, { FC } from "react";
import { Input } from "reactstrap";

type AppInputProps = {
  onChangeFunction: Function;
  value: string;
};

export const AppInput: FC<AppInputProps> = ({ onChangeFunction, value }) => {
  return (
    <Input
      id="exampleSearch"
      name="search"
      placeholder="enter country name"
      type="text"
      value={value}
      onChange={(evt) => {
        onChangeFunction(evt.target.value);
      }}
    />
  );
};
