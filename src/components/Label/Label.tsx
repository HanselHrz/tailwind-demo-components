import React from 'react';

interface LabelProps {
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown; // Para permitir props adicionales si es necesario
}

export function Label({
  htmlFor,
  className = '',
  children,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-900 leading-6 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
