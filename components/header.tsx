"use client";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="bg-[#1e9577] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Home size={32} className="text-white" />
          <h1 className="text-white text-2xl font-semibold ml-2">Jumbaa</h1>
        </div>
        <nav className="hidden md:block space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="text-2xl md:hidden text-white" onClick={toggleMenu}>
          <Menu size={32} />
        </button>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#1e9577] md:hidden">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:underline py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
