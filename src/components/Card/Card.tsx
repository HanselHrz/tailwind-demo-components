interface CardProps {
    variant?: "simple" | "product" | "info";
    title?: string;
    body?: string;
    imageSrc?: string;
    price?: string;
    infoItems?: { label: string; value: string }[];
    className?: string;
    [key: string]: unknown; // Para permitir props adicionales
  }
  
  export function Card({
    variant = "simple",
    title,
    body,
    imageSrc,
    price,
    infoItems,
    className = "",
    ...props
  }: CardProps) {
    return (
      <div className={`bg-white shadow-md rounded-lg p-6 mb-2 ${className}`} {...props}>
        {variant === "simple" && (
          <>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {body && <p>{body}</p>}
          </>
        )}
  
        {variant === "product" && (
          <>
            {imageSrc && (
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {price && <p className="text-primary font-bold text-lg mb-2">{price}</p>}
            {body && <p className="text-gray-600 text-sm text-center">{body}</p>}
          </>
        )}
  
        {variant === "info" && (
          <>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
              {infoItems &&
                infoItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium text-gray-700">{item.label}:</span>
                    <span className="text-gray-900">{item.value}</span>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    );
  }
  
  export default Card;
  