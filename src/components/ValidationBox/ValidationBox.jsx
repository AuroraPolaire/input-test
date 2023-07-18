import React from "react";
import { useValidate } from "../../hooks/useValidate";

const ValidationBox = ({ password }) => {
  const { easy, medium, strong, empty, enoughDigits } = useValidate({
    password,
  });

  const getClassNames = (strength) => {
    const classNames = ["box"];

    if (empty) classNames.push("gray");
    if (!enoughDigits && !empty) classNames.push("red");
    if (enoughDigits && easy && strength === "easy") classNames.push("red");
    if (enoughDigits && medium && strength !== "strong")
      classNames.push("yellow");
    if (enoughDigits && strong) classNames.push("green");

    return classNames.join(" ");
  };

  return (
    <div className="validation-box">
      <div className={getClassNames("easy")}>Easy</div>
      <div className={getClassNames("medium")}>Medium</div>
      <div className={getClassNames("strong")}>Strong</div>
    </div>
  );
};

export default ValidationBox;
