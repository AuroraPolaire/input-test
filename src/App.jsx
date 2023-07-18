import { useState } from "react";
import { StyledForm } from "./App.styled";
import Input from "./components/Input/Input";
import ValidationBox from "./components/ValidationBox/ValidationBox";
import ValidationMessage from "./components/ValidationMessage/ValidationMessage";

function App() {
  const [password, setPassword] = useState("");

  return (
    <StyledForm>
      <div className="input-box">
        <Input setPassword={setPassword} />
        <ValidationBox password={password} />
        <ValidationMessage password={password} />
      </div>
    </StyledForm>
  );
}

export default App;
