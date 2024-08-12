import React from 'react';

// Define las props para el Navbar y NavbarItem
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  current?: boolean;
  className?: string; // Clase personalizada para el elemento del navbar
}

interface NavbarProps {
  logoText: string;
  tagline: string;
  items: NavbarItemProps[];
  navbarClassName?: string; // Clase personalizada para el contenedor del navbar
  logoClassName?: string; // Clase personalizada apara el logo
  taglineClassName?: string; // Clase personalizada para la tagline
  itemClassName?: string; // Clase personalizada para los elementos de navegación
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, children, current, className }) => {
  return (
    <a
      href={href}
      className={`text-md no-underline ml-2 px-1 ${current ? 'text-black' : 'text-grey-darker hover:text-blue-dark'} ${className}`}
    >
      {children}
    </a>
  );
};

export const Navbar: React.FC<NavbarProps> = ({
  logoText,
  tagline,
  items,
  navbarClassName,
  logoClassName,
  taglineClassName,
  itemClassName,
}) => {
  return (
    <nav className={`font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full ${navbarClassName}`}>
      <div className={`mb-2 sm:mb-0 inner ${logoClassName}`}>
        <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
          {logoText}
        </a>
        <br />
        <span className={`text-xs text-grey-dark ${taglineClassName}`}>{tagline}</span>
      </div>
      <div className="sm:mb-0 self-center">
        {items.map((item, index) => (
          <NavbarItem key={index} href={item.href} current={item.current} className={itemClassName}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};

