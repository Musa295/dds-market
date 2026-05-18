import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  head: () => ({ meta: [
    { title: "Контакты — Digital Dentistry Solutions" },
    { name: "description", content: "Адрес офиса в Москве, телефон, email, Telegram и WhatsApp." },
  ]}),
  component: () => (
    <PageShell title="Контакты" subtitle="Свяжитесь с нами удобным способом — ответим в течение 30 минут в рабочее время." crumbs={[{ label: "Контакты" }]}>
      <div className="container mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[
            { i: Phone, l: "Телефон", v: SITE.phone, href: SITE.phoneHref },
            { i: Mail, l: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { i: MapPin, l: "Адрес", v: SITE.address },
            { i: Send, l: "Telegram", v: "@dds_moscow", href: SITE.telegram },
            { i: MessageCircle, l: "WhatsApp", v: SITE.phone, href: SITE.whatsapp },
            { i: Clock, l: "Часы работы", v: "Пн–Пт 9:00–19:00, Сб 10:00–16:00" },
          ].map((c) => (
            <div key={c.l} className="p-5 rounded-2xl border border-border bg-card flex items-start gap-4">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary"><c.i className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.l}</div>
                {c.href ? <a href={c.href} className="font-semibold hover:text-primary">{c.v}</a> : <div className="font-semibold">{c.v}</div>}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Заявка отправлена!"); }} className="p-8 rounded-3xl border border-border bg-card space-y-4 h-fit">
          <h2 className="font-display text-2xl font-bold">Оставить заявку</h2>
          <input required placeholder="Ваше имя" className="w-full h-11 px-4 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <input required type="tel" placeholder="Телефон" className="w-full h-11 px-4 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <input type="email" placeholder="Email" className="w-full h-11 px-4 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <textarea rows={4} placeholder="Сообщение" className="w-full p-4 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <Button type="submit" size="lg" className="w-full">Отправить</Button>
          <p className="text-xs text-muted-foreground text-center">Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.</p>
        </form>
      </div>
    </PageShell>
  ),
});
