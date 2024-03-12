import { InputHTMLAttributes, ReactElement } from "react";

export const Input = ({ ...rest }: InputProps): ReactElement => {
  return (
    <input
      className="rounded-sm border border-gray-400 p-3 shadow transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryLight focus:ring-offset-2 focus:ring-offset-primaryLight"
      {...rest}
    />
  );
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {};
