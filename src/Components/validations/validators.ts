// validators.ts
import { MutableRefObject } from "react";

export const emailValidator = ({ value }: { value: string }) => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return "Enter a valid email";
  }
};

export const passwordValidator = ({ value }: { value: string }) => {
  if (value.length < 8) {
    return "Password must be more than 8 characters";
  }
};

export const confirmPasswordValidator = (
  passwordRef: MutableRefObject<string>
) => {
  return ({ value }: { value: string }) => {
    if (value !== passwordRef.current) {
      return "Passwords don't match";
    }
  };
};
