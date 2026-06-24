import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, MessageCircle, Zap, Instagram } from "lucide-react";
import { SITE, NAV } from "./data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2 shadow-lg ring-1 ring-white/30">
              <img src={logo} alt="DDS MARKET" width={56} height={56} className="size-14 object-contain" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">DDS MARKET</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Digital Dentistry Solutions</div>
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
            {SITE.instagram ? (
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent"><Instagram className="size-4" /> Instagram</a>
            ) : (
              <span className="flex items-center gap-2 text-sm opacity-50 cursor-default" title="Скоро"><Instagram className="size-4" /> Instagram</span>
            )}
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
