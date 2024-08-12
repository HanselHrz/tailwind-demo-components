import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
  buttonClassName?: string;
  listClassName?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Dropdown({
  options,
  onSelect,
  className = "",
  buttonClassName = "",
  listClassName = "",
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} {...props}>
      <button
        className={`w-full py-2 px-4 border border-dropdown-border rounded-lg bg-dropdown-background shadow-md hover:bg-dropdown-hover focus:outline-none focus:ring-2 focus:ring-primary ${buttonClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul className={`absolute w-full bg-dropdown-background border border-dropdown-border rounded-lg mt-1 shadow-lg transition-transform duration-200 transform translate-y-0 ${listClassName}`}>
          {options.map((option: string) => (
            <li key={option} className="py-2 px-4 hover:bg-dropdown-hover cursor-pointer" onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
