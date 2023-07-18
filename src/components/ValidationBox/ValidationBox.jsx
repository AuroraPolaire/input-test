import React from "react";
import { useValidate } from "../../hooks/useValidate";

const ValidationBox = ({ password }) => {
  const { easy, medium, strong, empty, enoughDigits } = useValidate({
    password,
  });

  const getClassNames = (strength) => {
    const classNames = ["box"];

    switch (strength) {
      case "easy":
        if (empty) classNames.push("gray");
        if (!enoughDigits && !empty) classNames.push("red");
        if (enoughDigits && easy) classNames.push("red");
        if (enoughDigits && medium) classNames.push("yellow");
        if (enoughDigits && strong) classNames.push("green");
        return classNames.join(" ");
      case "medium":
        if (empty) classNames.push("gray");
        if (!enoughDigits && !empty) classNames.push("red");
        if (enoughDigits && easy) classNames.push("gray");
        if (enoughDigits && medium) classNames.push("yellow");
        if (enoughDigits && strong) classNames.push("green");
        return classNames.join(" ");
      case "strong":
        if (empty) classNames.push("gray");
        if (!enoughDigits && !empty) classNames.push("red");
        if (enoughDigits && easy) classNames.push("gray");
        if (enoughDigits && medium) classNames.push("gray");
        if (enoughDigits && strong) classNames.push("green");
        return classNames.join(" ");
      default:
        return;
    }
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
