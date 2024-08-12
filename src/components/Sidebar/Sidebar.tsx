
interface SidebarProps {
    title?: string;
    titleClassName?: string;
    className?: string;
    children: React.ReactNode;
  }

export const Sidebar: React.FC<SidebarProps> = ({
  title = "Material Tailwind",
  titleClassName = "block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900",
  className = "relative flex flex-col bg-clip-border rounded-xl bg-slate-200 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5",
  children,
}) => {
  return (
    <div className={className}>
      <div className="mb-2 p-4">
        <h5 className={titleClassName}>{title}</h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        {children}
      </nav>
    </div>
  );
};
