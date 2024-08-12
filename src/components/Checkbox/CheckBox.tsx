import { InputHTMLAttributes, FC } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  customSize?: string;
  rounded?: string;
  borderColor?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  focusRingColor?: string;
  margin?: string;
  padding?: string;
  shadow?: string;
}

export const CheckBox: FC<Props> = ({
  customSize = "h-4 w-4",
  rounded = "rounded",
  borderColor = "border-gray-300",
  checkedColor = "bg-indigo-600",
  uncheckedColor = "bg-white",
  focusRingColor = "focus:ring-indigo-500",
  margin = "mr-2",
  padding = "",
  shadow = "",
  ...props
}) => {
  return (
    <input
      type="checkbox"
      className={`${customSize} ${rounded} ${borderColor} ${checkedColor} ${uncheckedColor} ${focusRingColor} ${margin} ${padding} ${shadow} border focus:ring-2`}
      {...props}
    />
  );
};
