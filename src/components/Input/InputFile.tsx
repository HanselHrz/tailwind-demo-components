import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  rounded?: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  focusRingColor?: string;
  padding?: string;
  textSize?: string;
  shadow?: string;
  label?: string;
}

export const FileUpload: FC<Props> = ({
  width = "w-full",
  height = "h-12",
  rounded = "rounded-md",
  borderColor = "border-gray-300",
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  placeholderColor = "placeholder:text-gray-400",
  focusRingColor = "focus:ring-indigo-500",
  padding = "py-2 px-3",
  textSize = "text-sm",
  shadow = "shadow-sm",
  label = "Selecciona un archivo",
  ...props
}) => {
  return (
    <div className={`relative ${width} ${height} ${rounded} ${borderColor} ${backgroundColor} ${shadow}`}>
      <input
        type="file"
        className={`absolute inset-0 opacity-0 cursor-pointer ${padding} ${textSize} ${textColor} ${placeholderColor} ${focusRingColor}`}
        {...props}
      />
      <div className={`flex items-center justify-center ${width} ${height} ${rounded} ${borderColor} ${backgroundColor} ${shadow} border`}>
        <span className={`text-center ${textColor}`}>{label}</span>
      </div>
    </div>
  );
};
