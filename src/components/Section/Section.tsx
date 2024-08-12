interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown; // Para permitir props adicionales
}

export function Section({ title, children, className = "", ...props }: SectionProps) {
    return (
        <section className={`mb-8 p-4 bg-section-background border border-section-border rounded-lg ${className}`} {...props}>
            <h2 className="text-3xl font-heading mb-4">{title}</h2>
            {children}
        </section>
    );
}

export default Section;
