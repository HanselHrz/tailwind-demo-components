import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
  headerClassName = "",
  contentClassName = "",
  ...props
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-accordion-border rounded-lg shadow-sm ${className}`} {...props}>
      <button
        className={`w-full text-left py-4 px-6 text-lg font-semibold bg-accordion-header hover:bg-accordion-content ${headerClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div
        className={`px-6 pb-4 bg-accordion-content transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"} ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;