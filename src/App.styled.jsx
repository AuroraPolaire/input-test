import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  font-size: 14px;

  .input-box {
    width: 300px;
  }
  .input {
    margin: 3px;
    padding: 3px;
    border-radius: 2px;
    outline: none;
    width: 100%;
  }

  .box {
    width: 100%;
    margin: 3px;
    padding: 3px;
    border-radius: 2px;
    border: 1px solid;
  }
  .gray {
    border-color: gray;
    color: gray;
    text-align: center;
  }
  .red {
    border-color: red;
    color: red;
    text-align: center;
  }
  .yellow {
    border-color: yellow;
    color: yellow;
    text-align: center;
  }
  .green {
    border-color: #009c0a;
    color: #009c0a;
    text-align: center;
  }
`;
