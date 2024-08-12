import { TextareaHTMLAttributes, FC } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  rounded?: string;
  border?: string;
  paddingY?: string;
  paddingX?: string;
  textColor?: string;
  shadow?: string;
  ringColor?: string;
  placeholderColor?: string;
  focusRingColor?: string;
  textSize?: string;
  leading?: string;
}

export const Textarea: FC<Props> = ({
  width = "w-full",
  height = "h-32",
  rounded = "rounded-md",
  border = "border",
  paddingY = "py-2",
  paddingX = "px-3",
  textColor = "text-gray-900",
  shadow = "shadow-sm",
  ringColor = "ring-gray-300",
  placeholderColor = "placeholder:text-gray-400",
  focusRingColor = "focus:ring-indigo-600",
  textSize = "text-sm",
  leading = "leading-6",
  ...props
}) => {
  return (
    <textarea
      className={`block ${width} ${height} ${rounded} ${border} ${paddingY} ${paddingX} ${textColor} ${shadow} ring-1 ring-inset ${ringColor} ${placeholderColor} focus:ring-2 focus:ring-inset ${focusRingColor} ${textSize} ${leading}`}
      {...props}
    />
  );
};
