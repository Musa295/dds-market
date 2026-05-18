import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageShell({
  title,
  subtitle,
  crumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="border-b border-border bg-hero-gradient">
        <div className="container mx-auto px-6 py-14 md:py-20">
          {crumbs && (
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
              <Link to="/" className="hover:text-primary">Главная</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3" />
                  {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-balance max-w-3xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      </section>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
