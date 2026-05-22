import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, Search, MessageCircle, Send, Zap } from "lucide-react";
import { SITE, NAV } from "./data";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-9 items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-5 opacity-90">
            <span className="flex items-center gap-1.5"><Mail className="size-3.5" /> {SITE.email}</span>
            <span>{SITE.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition"><Send className="size-3.5" /> Telegram</a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition"><MessageCircle className="size-3.5" /> WhatsApp</a>
            <a href={SITE.max} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition"><Zap className="size-3.5" /> MAX</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="DDS MARKET" width={40} height={40} className="size-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-base tracking-tight">DDS MARKET</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Digital Dentistry · Moscow</div>
          </div>
        </Link>

        <SearchBox className="hidden md:flex max-w-md flex-1" />

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold text-sm hover:text-primary transition">
            <Phone className="size-4" /> {SITE.phone}
          </a>
          <Button variant="default" size="sm">Заказать звонок</Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Main nav */}
      <nav className="hidden lg:block border-t border-border/60">
        <div className="container mx-auto flex items-center justify-center gap-1 px-6">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary border-primary" }}
              inactiveProps={{ className: "text-foreground/75 border-transparent hover:text-primary" }}
              className="px-4 py-3 text-sm font-medium border-b-2 transition"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border/60 px-6 py-4 space-y-3 bg-background">
          <SearchBox />
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-1.5 font-medium">
              {n.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="flex items-center gap-2 pt-2 font-semibold border-t"><Phone className="size-4" /> {SITE.phone}</a>
          <div className="flex items-center gap-4 pt-2 text-sm">
            <a href={SITE.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-1"><Send className="size-4" /> TG</a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-1"><MessageCircle className="size-4" /> WA</a>
            <a href={SITE.max} target="_blank" rel="noreferrer" className="flex items-center gap-1"><Zap className="size-4" /> MAX</a>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchBox({ className = "" }: { className?: string }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const q = new FormData(e.currentTarget).get("q");
        if (q) window.location.href = `/catalog?q=${encodeURIComponent(String(q))}`;
      }}
      className={`relative ${className}`}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <input
        name="q"
        placeholder="Поиск по сайту: сканер, фреза, принтер…"
        className="w-full h-10 pl-10 pr-4 rounded-full border border-border bg-muted/50 text-sm outline-none focus:border-primary focus:bg-background transition"
      />
    </form>
  );
}
