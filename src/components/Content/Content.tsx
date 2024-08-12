interface ContentProps {
    children: React.ReactNode;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    className?: string;
    [key: string]: unknown; // Para permitir props adicionales
}

export function Content({
    children,
    padding = "p-6",
    margin = "mx-auto max-w-7xl",
    backgroundColor = "bg-content-background",
    className = "",
    ...props
}: ContentProps) {
    return (
        <div className={`${padding} ${backgroundColor} ${className} ${margin}`} {...props}>
            {children}
        </div>
    );
}

export default Content;
