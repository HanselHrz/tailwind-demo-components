interface ImageProps {
  src: string;
  alt: string;
  rounded?: boolean;
  shadow?: boolean;
  border?: boolean;
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Image({
  src,
  alt,
  rounded = false,
  shadow = false,
  border = false,
  className = "",
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${rounded ? "rounded-full" : "rounded-lg"} ${shadow ? "shadow-lg shadow-image-shadow" : ""} ${border ? "border-4 border-image-border" : ""} ${className} hover:opacity-90 transition-opacity duration-300`}
      {...props}
    />
  );
}
export default Image;