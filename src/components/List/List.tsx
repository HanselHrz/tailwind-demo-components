import { FaCheckCircle } from "react-icons/fa";

interface ListProps {
  items: string[];
  ordered?: boolean;
  marker?: "disc" | "circle" | "square" | "decimal" | "none";
  textColor?: string;
  icon?: React.ReactNode;
  border?: boolean;
  spacing?: string;
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function List({
  items,
  ordered = false,
  marker = "none",
  textColor = "text-list-marker",
  icon = <FaCheckCircle />,
  border = false,
  spacing = "mb-2",
  className = "",
  ...props
}: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  const markerClass = marker !== "none" ? `list-${marker}` : "";

  return (
    <Tag className={`${markerClass} pl-5 ${className} ${border ? "border-l-2 border-gray-300 pl-4" : ""}`} {...props}>
      {items.map((item, index) => (
        <li key={index} className={`${spacing} flex items-center ${textColor}`}>
          {icon && <span className="mr-2">{icon}</span>}
          {item}
        </li>
      ))}
    </Tag>
  );
}
export default List;