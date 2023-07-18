import React from "react";
import { useValidate } from "../../hooks/useValidate";
import { message } from "../../utils/validationMessage";

const ValidationMessage = ({ password }) => {
  const { easy, medium, strong, empty, enoughDigits } = useValidate({
    password,
  });
  return (
    <>
      {easy && enoughDigits ? message.easy : null}
      {medium && enoughDigits ? message.medium : null}
      {strong && enoughDigits ? message.strong : null}
      {empty ? message.empty : null}
      {!enoughDigits && !empty ? message.enoughDigits : null}
    </>
  );
};

export default ValidationMessage;
