import { ReactNode } from "react";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-md border border-orange-300 bg-white p-5 shadow-md">
      {children}
    </div>
  );
};

export type CardProps = {
  children: ReactNode;
};
