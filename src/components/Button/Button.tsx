interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  rounded?: "small" | "medium" | "large"; 
  [key: string]: unknown; // Para permitir props adicionales
}

export function Button({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  rounded = "medium", 
  ...props
}: ButtonProps) {
  const baseClass = `font-semibold shadow-md transition-colors duration-200 ease-in-out ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  const sizeClass =
    size === "small"
      ? "py-1 px-2 text-sm"
      : size === "large"
      ? "py-3 px-6 text-lg"
      : "py-2 px-4 text-md";

  const variantClass = disabled
    ? "bg-button-disabled text-text-primary"
    : variant === "primary"
    ? "bg-button-primary text-text-primary hover:bg-accent"
    : variant === "secondary"
    ? "bg-button-secondary text-text-primary hover:bg-primary"
    : variant === "warning"
    ? "bg-button-warning text-text-primary hover:bg-yellow-600"
    : "bg-button-danger text-text-primary hover:bg-red-700";

  const roundedClass = 
    rounded === "small" ? "rounded-sm" :
    rounded === "medium" ? "rounded-md" :
    "rounded-lg"; 

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass} ${roundedClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
