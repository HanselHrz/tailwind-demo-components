interface ContentProps {
    children: React.ReactNode;
    padding?: string;
    backgroundColor?: string;
    className?: string;
    [key: string]: unknown; // Para permitir props adicionales
}

export function Content({
    children,
    padding = "p-4",
    backgroundColor = "bg-content-background",
    className = "",
    ...props
}: ContentProps) {
    return (
        <div className={`${padding} ${backgroundColor} ${className}`} {...props}>
            {children}
        </div>
    );
}

export default Content;
