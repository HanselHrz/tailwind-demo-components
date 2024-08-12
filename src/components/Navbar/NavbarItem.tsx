export interface NavbarItemProps {
  href: string;
  text: string;
  className?: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ href, text, className = '' }) => {
  return (
    <a href={href} className={`text-md no-underline text-black hover:text-blue-dark ml-2 px-1 ${className}`}>
      {text}
    </a>
  );
};
