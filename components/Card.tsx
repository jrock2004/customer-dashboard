import { ReactNode } from "react";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-5 border border-orange-300">
      {children}
    </div>
  );
};

export type CardProps = {
  children: ReactNode;
};
