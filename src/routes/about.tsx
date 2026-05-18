import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Award, Users, Globe, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "О компании — Digital Dentistry Solutions" },
    { name: "description", content: "Digital Dentistry Solutions — поставщик цифрового стоматологического оборудования в Москве с 2012 года." },
  ]}),
  component: () => (
    <PageShell title="О компании" subtitle="Мы помогаем стоматологическим клиникам и лабораториям переходить на цифровой workflow с 2012 года." crumbs={[{ label: "О нас" }]}>
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold">Digital Dentistry Solutions</h2>
          <p className="mt-4 text-muted-foreground">
            Команда из 40+ инженеров, технических специалистов и менеджеров. Прямые партнёрские отношения с производителями VHF, Asiga, Medit, exocad, Aidite, Dentsply и другими.
          </p>
          <p className="mt-3 text-muted-foreground">
            Собственный сервисный центр в Москве, склад оригинальных запчастей, подменный фонд оборудования.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { i: Award, n: "12+", l: "лет опыта" },
            { i: Users, n: "850+", l: "клиник-партнёров" },
            { i: Globe, n: "60+", l: "регионов поставок" },
            { i: Wrench, n: "24/7", l: "сервис" },
          ].map((s) => (
            <div key={s.l} className="p-6 rounded-2xl border border-border bg-card">
              <s.i className="size-6 text-primary" />
              <div className="mt-3 font-display text-3xl font-bold">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <h3 className="font-display text-2xl font-bold mb-6">Принципы работы</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Только оригинал", d: "Прямые поставки от производителей, все официальные документы и гарантии." },
            { t: "Сервис в приоритете", d: "Реагируем в течение 4 часов, подменное оборудование на время ремонта." },
            { t: "Прозрачность", d: "Чёткие сметы, фиксированные сроки, никаких скрытых платежей." },
          ].map((p) => (
            <div key={p.t} className="p-6 rounded-2xl bg-surface border border-border">
              <div className="font-semibold text-lg">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  ),
});
