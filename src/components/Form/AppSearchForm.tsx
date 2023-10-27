import React, { FC, useState } from "react";
import { FormGroup, InputGroup, Label } from "reactstrap";
import { AppInput } from "./AppInput";
import { AppButton } from "./AppButton";

type AppSearchFormProps = {
  clickFunction: Function;
};

export const AppSearchForm: FC<AppSearchFormProps> = ({ clickFunction }) => {
  const [message, setMessage] = useState<string>("");

  const onChange = (message: string) => {
    setMessage(message);
  };

  const onClick = () => {
    clickFunction(message);
    setMessage("");
  };

  return (
    <FormGroup>
      <Label for="exampleSearch" hidden>
        Countries
      </Label>
      <InputGroup>
        <AppInput onChangeFunction={onChange} value={message} />
        <AppButton clickFunction={onClick} />
      </InputGroup>
    </FormGroup>
  );
};
