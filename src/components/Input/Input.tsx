import { InputHTMLAttributes, FC } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
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

export const Input: FC<Props> = ({
  width = "w-full",
  rounded = "rounded-md",
  border = "border-0",
  paddingY = "py-2",
  paddingX = "px-3",
  textColor = "text-gray-900",
  shadow = "shadow-sm",
  ringColor = "ring-gray-300",
  placeholderColor = "placeholder:text-gray-400",
  focusRingColor = "focus:ring-indigo-600",
  textSize = "sm:text-sm",
  leading = "sm:leading-6",
  ...props
}) => {
  return (
    <input
      className={`block mb-2 ${width} ${rounded} ${border} ${paddingY} ${paddingX} ${textColor} ${shadow} ring-1 ring-inset ${ringColor} ${placeholderColor} focus:ring-2 focus:ring-inset ${focusRingColor} ${textSize} ${leading}`}
      {...props}
    />
  );
};
