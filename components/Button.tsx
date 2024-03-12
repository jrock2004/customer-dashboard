import { ButtonHTMLAttributes, ReactElement } from "react";

export const Button = ({
  children,
  size = "default",
  title,
  variant = "outlined",
  width = "w-auto",
  ...rest
}: ButtonProps): ReactElement => {
  const defaultClasses = "rounded-md border";
  const sizeClasses = size === "default" ? "px-4 py-2" : "p-2";
  const colorClasses =
    variant === "outlined"
      ? "text-primaryLight border-primary hover:bg-primaryLight hover:text-purple-300"
      : "bg-primaryLight text-purple-300 hover:bg-primary hover:text-purple-300";

  return (
    <button
      className={`${defaultClasses} ${sizeClasses} ${colorClasses} ${width}`}
      title={title}
      {...rest}
    >
      {children}
    </button>
  );
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactElement;
  size?: "default" | "small";
  title?: string;
  variant?: "outlined" | "contained";
  width?: string;
};
