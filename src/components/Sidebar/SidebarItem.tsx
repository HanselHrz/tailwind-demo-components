interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    className?: string;
    iconClassName?: string;
    labelClassName?: string;
    onClick?: () => void;
  }

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active = false,
  className = "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none",
  iconClassName = "grid place-items-center mr-4",
  labelClassName = "",
  onClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`${className} ${active ? 'bg-blue-50 text-blue-900' : ''}`}
      onClick={onClick}
    >
      <div className={iconClassName}>{icon}</div>
      <span className={labelClassName}>{label}</span>
    </div>
  );
};
