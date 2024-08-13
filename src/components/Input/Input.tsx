
interface InputProps {
  label?: string;
  helpText?: string;
  error?: boolean;
  success?: boolean;
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales si es necesario
}

export function Input({
  label,
  helpText,
  error = false,
  success = false,
  className = '',
  ...props
}: InputProps) {

  const getInputColor = () => {
    if (error) return 'ring-input-error';
    if (success) return 'ring-input-success';
    return 'ring-input-border';
  };

  const getLabelTextColor = () => {
    if (error) return 'text-input-error';
    if (success) return 'text-input-success';
    return 'text-text-label';
  };

  const getHelpTextColor = () => {
    if (error) return 'text-input-error';
    if (success) return 'text-input-success';
    return 'text-text-help';
  };

  const inputRingColor = getInputColor();
  const labelTextColor = getLabelTextColor();
  const helpTextColor = getHelpTextColor();

  return (
    <div className={`w-full px-5 ${className}`}>
      {label && (
        <label className={`block mb-2 text-sm font-medium ${labelTextColor}`}>
          {label}
        </label>
      )}
      <input
        className={`block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ${inputRingColor} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-input-focus sm:text-sm sm:leading-6`}
        {...props}
      />
      {helpText && (
        <p className={`mt-2 text-sm ${helpTextColor}`}>
          {helpText}
        </p>
      )}
    </div>
  );
}

export default Input;
