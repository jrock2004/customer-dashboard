import { ReactNode } from "react";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-sm border border-gray-300 bg-white p-5 shadow-lg">
      {children}
    </div>
  );
};

export type CardProps = {
  children: ReactNode;
};
