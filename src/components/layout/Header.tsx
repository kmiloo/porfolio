import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  // { href: "/algoritmos", label: "Algoritmos" },
  // { href: "/playground", label: "Playground" },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-widest">
          Portfolio
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
