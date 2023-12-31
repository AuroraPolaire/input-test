import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  font-size: 18px;

  .input-box {
    width: 400px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input {
    margin: 3px;
    padding: 3px;
    border-radius: 2px;
    outline: none;
    width: 100%;
    height: 25px;
  }

  .validation-box {
    display: flex;
    gap: 14px;
  }

  .box {
    width: 115px;
    margin: 3px;
    padding: 3px;
    border-radius: 2px;
    border: 1px solid;
    text-align: center;
  }
  .gray {
    border-color: #808080;
    color: #808080;
  }
  .red {
    border-color: #ff0000;
    color: #ff0000;
    text-align: center;
  }
  .yellow {
    border-color: #ffee00;
    color: #ffee00;
    text-align: center;
  }
  .green {
    border-color: #00cb00;
    color: #00cb00;
  }
`;
