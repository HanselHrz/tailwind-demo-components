import { InputHTMLAttributes, FC } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: string;
  rounded?: string;
  borderColor?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  focusRingColor?: string;
  thumbColor?: string;
  margin?: string;
  padding?: string;
  shadow?: string;
}

export const Switch: FC<Props> = ({
  size = "w-10 h-6",
  rounded = "rounded-full",
  borderColor = "border-gray-400",
  checkedColor = "bg-indigo-600",
  uncheckedColor = "bg-gray-200",
  focusRingColor = "focus:ring-indigo-500",
  thumbColor = "bg-white",
  margin = "mr-2",
  padding = "",
  shadow = "",
  ...props
}) => {
  return (
    <div className={`relative inline-flex items-center ${size} ${margin} ${padding} ${shadow}`}>
      <input
        type="checkbox"
        className={`sr-only peer`}
        {...props}
      />
      <div
        className={`block ${size} ${rounded} ${borderColor} ${uncheckedColor} peer-checked:${checkedColor} peer-focus:ring-2 peer-focus:${focusRingColor}`}
      >
        <div
          className={`absolute left-0 top-0 inline-block w-6 h-6 transition-transform duration-200 ease-in-out transform ${rounded} ${thumbColor} peer-checked:translate-x-full`}
        ></div>
      </div>
    </div>
  );
};
