"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ name, href }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href ? "text-pink-400 font-bold" : ""}`}
    >
      {name}
    </Link>
  );
}
