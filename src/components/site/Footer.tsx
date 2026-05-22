import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, MessageCircle, Zap } from "lucide-react";
import { SITE, NAV } from "./data";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-lg bg-accent text-accent-foreground font-bold">D</div>
            <div>
              <div className="font-display font-bold">Digital Dentistry</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Solutions · Moscow</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Поставка, монтаж и сервис цифрового стоматологического оборудования в Москве и по всей России.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Навигация</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-80 hover:opacity-100 hover:text-accent transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="size-4 shrink-0 mt-0.5" /> <a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 mt-0.5" /> <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5" /> <span className="opacity-80">{SITE.address}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Мессенджеры</h4>
          <div className="space-y-2">
            <a href={SITE.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent"><Send className="size-4" /> Telegram</a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent"><MessageCircle className="size-4" /> WhatsApp</a>
            <a href={SITE.max} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent"><Zap className="size-4" /> MAX</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm hover:text-accent"><Mail className="size-4" /> Email</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-6 py-4 text-xs opacity-70 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Digital Dentistry Solutions. Все права защищены.</div>
          <div>Цены не являются публичной офертой</div>
        </div>
      </div>
    </footer>
  );
}
