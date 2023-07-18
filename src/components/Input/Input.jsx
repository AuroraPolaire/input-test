import React from "react";

const Input = ({ setPassword }) => {
  return (
    <input
      className="input"
      onChange={(e) => setPassword(e.currentTarget.value)}
    />
  );
};

export default Input;
