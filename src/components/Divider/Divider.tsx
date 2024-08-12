interface DividerProps {
  type?: "solid" | "dotted" | "dashed" | "double";
  orientation?: "horizontal" | "vertical";
  length?: string;
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Divider({
  type = "solid",
  orientation = "horizontal",
  length = "full",
  className = "",
  ...props
}: DividerProps) {
  const typeClass =
    type === "dotted"
      ? "border-dotted"
      : type === "dashed"
      ? "border-dashed"
      : type === "double"
      ? "border-double"
      : "border-solid";

  const orientationClass =
    orientation === "vertical"
      ? `border-l-2 h-${length} mx-4`
      : `border-t-2 w-${length} my-4`;

  return <div className={`${typeClass} ${orientationClass} border-gray-300 ${className}`} {...props} />;
}

export default Divider;