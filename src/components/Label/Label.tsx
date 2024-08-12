import { LabelHTMLAttributes, FC } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  leading?: string;
  margin?: string;
  padding?: string;
  display?: string;
}

export const Label: FC<Props> = ({
  textSize = "text-sm",
  fontWeight = "font-medium",
  textColor = "text-gray-900",
  leading = "leading-6",
  margin = "",
  padding = "",
  display = "block",
  ...props
}) => {
  return (
    <label
      className={`${display} ${textSize} ${fontWeight} ${textColor} ${leading} ${margin} ${padding}`}
      {...props}
    />
  );
};
