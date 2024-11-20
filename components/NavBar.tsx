"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import '../styles/NavBar/NavBar.css';
import Link from "next/link";

const NavBar: FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "首頁" },
    { href: "/about", label: "關於 John" },
    { href: "/portfolio", label: "作品集" },
    { href: "/contact", label: "聯絡方式" },
  ];
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">Logo</Link>
        <nav className="navbar">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default NavBar;