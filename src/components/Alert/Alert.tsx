import { FaInfoCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";

interface AlertProps {
  message: string;
  variant?: "info" | "warning" | "danger";
  className?: string;
  iconClassName?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Alert({
  message,
  variant = "info",
  className = "",
  iconClassName = "",
  ...props
}: AlertProps) {
  const baseClass = `flex items-center p-4 rounded-lg text-sm font-medium border-l-4 ${className}`;

  const variantClass =
    variant === "info"
      ? "bg-alert-info text-blue-800 border-blue-500"
      : variant === "warning"
      ? "bg-alert-warning text-yellow-800 border-yellow-500"
      : "bg-alert-danger text-red-800 border-red-500";

  const Icon = variant === "info"
    ? FaInfoCircle
    : variant === "warning"
    ? FaExclamationTriangle
    : FaTimesCircle;

  return (
    <div className={`${baseClass} ${variantClass}`} {...props}>
      <Icon className={`mr-3 text-xl ${iconClassName}`} />
      {message}
    </div>
  );
}

export default Alert;