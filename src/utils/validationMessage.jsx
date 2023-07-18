export const message = {
  empty: <div className="gray">Enter the password</div>,
  notEnoughDigits: (
    <div className="red">There should be more that 8 characters</div>
  ),
  easy: (
    <div className="red">
      The password must have the combination of numbers, letters and symbols
    </div>
  ),
  medium: (
    <div className="yellow">
      The password must have the combitation of numbers, letters and symbols
    </div>
  ),
  strong: <div className="green">The password is valid</div>,
};
