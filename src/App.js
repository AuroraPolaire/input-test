import "./App.css";
import { useState } from "react";
import { StyledForm } from "./App.styled";
import { useValidate } from "./useValidate";

function App() {
  const [password, setPassword] = useState("");

  const { easy, medium, strong, empty, enoughDigits } = useValidate({
    password,
  });

  console.log(easy, medium, strong, empty, enoughDigits);

  return (
    <StyledForm>
      <div className="input-box">
        <input
          className="input"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <div
          className={`${empty ? "gray" : ""} ${
            !enoughDigits && !empty ? "red" : ""
          } ${enoughDigits && easy ? "red" : ""} ${
            enoughDigits && medium ? "yellow" : ""
          } ${enoughDigits && strong ? "green" : ""} box`}
        >
          Easy
        </div>
        <div
          className={`${empty ? "gray" : ""} ${
            !enoughDigits && !empty ? "red" : ""
          } ${enoughDigits && easy ? "gray" : ""} ${
            enoughDigits && medium ? "yellow" : ""
          } ${enoughDigits && strong ? "green" : ""} box`}
        >
          Medium
        </div>
        <div
          className={`${empty ? "gray" : ""} ${
            !enoughDigits && !empty ? "red" : ""
          } ${enoughDigits && easy ? "gray" : ""} ${
            enoughDigits && medium ? "gray" : ""
          } ${enoughDigits && strong ? "green" : ""} box`}
        >
          Strong
        </div>

        {easy && enoughDigits ? (
          <div className="red">
            The password must have the combination of numbers, letters and
            symbols
          </div>
        ) : null}
        {medium && enoughDigits ? (
          <div className="yellow">
            The password must have the combitation of numbers, letters and
            symbols
          </div>
        ) : null}
        {strong && enoughDigits ? (
          <div className="green">The password is valid</div>
        ) : null}
        {empty ? <div className="gray">Enter the password</div> : null}
        {!enoughDigits && !empty ? (
          <div className="red">There should be more that 8 characters</div>
        ) : null}
      </div>
    </StyledForm>
  );
}

export default App;
