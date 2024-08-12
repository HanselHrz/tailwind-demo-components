import { SelectHTMLAttributes, FC} from 'react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  width?: string;
  height?: string;
  rounded?: string;
  borderColor?: string;
  textColor?: string;
  placeholderColor?: string;
  focusRingColor?: string;
  paddingY?: string;
  paddingX?: string;
  textSize?: string;
  shadow?: string;
}

export const Select: FC<Props> = ({
  options,
  width = "w-full",
  height = "h-10",
  rounded = "rounded-md",
  borderColor = "border-gray-300",
  textColor = "text-gray-900",
  placeholderColor = "placeholder:text-gray-400",
  focusRingColor = "focus:ring-indigo-500",
  paddingY = "py-2",
  paddingX = "px-3",
  textSize = "text-sm",
  shadow = "shadow-sm",
  ...props
}) => {
  return (
    <select
      className={`mb-2 ${width} ${height} ${rounded} ${borderColor} ${textColor} ${placeholderColor} ${focusRingColor} ${paddingY} ${paddingX} ${textSize} ${shadow} border focus:ring-2`}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
