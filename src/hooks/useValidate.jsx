import { useCallback, useEffect, useState } from "react";

export const useValidate = ({ password }) => {
  const [empty, setEmpty] = useState(true);
  const [enoughDigits, setEnoughDigits] = useState(false);
  const [hasLetters, setHasLetters] = useState(false);
  const [hasDigits, setHasDigits] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [strong, setStrong] = useState(false);

  const updateValidation = useCallback(() => {
    const passwordLength = password ? password.toString().length : 0;
    setEmpty(passwordLength === 0);
    setEnoughDigits(passwordLength >= 8);
    setHasLetters(/[a-zA-Z]/.test(password));
    setHasDigits(/\d/.test(password));
    setHasSymbols(/[!@#$%^&*()]/.test(password));
  }, [password]);

  const getPasswordStrength = useCallback(() => {
    if (hasLetters && hasDigits && hasSymbols) {
      setStrong(true);
      setMedium(false);
      setEasy(false);
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      setMedium(true);
      setStrong(false);
      setEasy(false);
    } else {
      setEasy(true);
      setMedium(false);
      setStrong(false);
    }
  }, [hasLetters, hasDigits, hasSymbols]);

  useEffect(() => {
    updateValidation();
  }, [updateValidation]);

  useEffect(() => {
    getPasswordStrength();
  }, [getPasswordStrength]);

  useEffect(() => {
    if (empty) {
      setEasy(false);
      setMedium(false);
      setStrong(false);
    }
  }, [empty]);

  return { easy, medium, strong, empty, enoughDigits };
};
