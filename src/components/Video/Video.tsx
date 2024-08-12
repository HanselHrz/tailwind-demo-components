interface VideoProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  shadow?: boolean;
  border?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Video({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  shadow = false,
  border = false,
  size = "medium",
  className = "",
  ...props
}: VideoProps) {
  const sizeClass =
    size === "small"
      ? "w-1/3"
      : size === "large"
      ? "w-full"
      : "w-2/3";

  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      className={`${sizeClass} h-auto ${shadow ? "shadow-lg shadow-video-shadow" : ""} ${border ? "border-4 border-video-border" : ""} ${className} hover:opacity-90 transition-opacity duration-300`}
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;