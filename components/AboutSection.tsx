import { ReactNode } from "react";

export const AboutSection = ({ children, title }: AboutSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export type AboutSectionProps = {
  children: ReactNode;
  title: string;
};
