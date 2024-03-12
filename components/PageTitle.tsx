import { ReactElement } from "react";

export const PageTitle = ({
  title,
  variant = "h1",
  additionalClasses = "",
}: PageTitleProps): ReactElement => {
  if (variant === "h2") {
    return (
      <h2 className={`text-lg font-semibold text-primary ${additionalClasses}`}>
        {title}
      </h2>
    );
  }

  return (
    <h1 className={`text-2xl font-semibold text-primary ${additionalClasses}`}>
      {title}
    </h1>
  );
};

export type PageTitleProps = {
  additionalClasses?: string;
  title: string;
  variant?: "h1" | "h2";
};
