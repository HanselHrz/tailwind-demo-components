import { InputHTMLAttributes, FC } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: string;
  rounded?: string;
  borderColor?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  focusRingColor?: string;
  margin?: string;
  padding?: string;
  shadow?: string;
}

export const RadioButton: FC<Props> = ({
  size = "h-4 w-4",
  rounded = "rounded-full",
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
      type="radio"
      className={`${size} ${rounded} ${borderColor} ${checkedColor} ${uncheckedColor} ${focusRingColor} ${margin} ${padding} ${shadow} border focus:ring-2`}
      {...props}
    />
  );
};
