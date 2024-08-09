import { FC, PropsWithChildren } from "react"
interface SubTitleProps {
    size?: string;
    weight?: string;
    underline?: boolean;
    color?: string;
    align?: "left" | "center" | "right";
    margin?: string;
    padding?: string;
  }

  export const SubTitle: FC<PropsWithChildren<SubTitleProps>> = ({
    children,
    size = "text-2xl",
    weight = "font-bold",
    underline = false,
    color = "text-black",
    align = "left",
    margin = "my-4",
    padding = "",
  }) => {
    return (
      <h3
        className={`${size} ${weight} ${underline ? "underline" : ""} ${color} text-${align} ${margin} ${padding}`}
      >
        {children}
      </h3>
    );
  };