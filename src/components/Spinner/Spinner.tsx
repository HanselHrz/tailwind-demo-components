interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent";
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Spinner({
  size = "medium",
  color = "primary",
  className = "",
  ...props
}: SpinnerProps) {
  const sizeClass =
    size === "small"
      ? "h-4 w-4"
      : size === "large"
      ? "h-12 w-12"
      : "h-8 w-8";

  const colorClass = color === "primary"
    ? "border-primary"
    : color === "secondary"
    ? "border-secondary"
    : "border-accent";

  return (
    <div className={`animate-spin border-4 border-t-transparent ${colorClass} rounded-full ${sizeClass} ${className}`} {...props}></div>
  );
}

export default Spinner;