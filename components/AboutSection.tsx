import { ReactNode } from "react";
import { PageTitle } from "./PageTitle";

export const AboutSection = ({ children, title }: AboutSectionProps) => {
  return (
    <div className="mb-8">
      <PageTitle title={title} variant="h2" />
      {children}
    </div>
  );
};

export type AboutSectionProps = {
  children: ReactNode;
  title: string;
};
