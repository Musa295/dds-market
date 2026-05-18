import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Truck, Package, MapPin, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/delivery")({
  head: () => ({ meta: [
    { title: "Доставка и монтаж — Digital Dentistry Solutions" },
    { name: "description", content: "Доставка стоматологического оборудования по Москве и всей России. Монтаж и пусконаладка." },
  ]}),
  component: () => (
    <PageShell title="Доставка и монтаж" subtitle="Доставляем по Москве, России и СНГ. Берём на себя страхование, монтаж и пусконаладку." crumbs={[{ label: "Доставка" }]}>
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Truck, t: "Москва и МО", d: "Доставка собственным транспортом в день оплаты или на следующий день." },
            { i: Package, t: "Россия", d: "Транспортные компании ПЭК, Деловые линии, СДЭК. Сроки 2–10 дней." },
            { i: MapPin, t: "СНГ", d: "Поставки в Беларусь, Казахстан, Армению. Полный таможенный пакет." },
            { i: ShieldCheck, t: "Страхование", d: "Каждая отправка застрахована на полную стоимость." },
          ].map((c) => (
            <div key={c.t} className="p-6 rounded-2xl border border-border bg-card">
              <c.i className="size-6 text-primary" />
              <div className="mt-4 font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 p-8 md:p-12 rounded-3xl bg-surface border border-border">
          <h2 className="font-display text-3xl font-bold">Монтаж и пусконаладка</h2>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Сертифицированные инженеры производителей выполнят установку, калибровку и первичное обучение персонала. Гарантия на работы — 12 месяцев.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
            {[
              "Подключение к инженерным сетям клиники",
              "Калибровка и тестовые работы",
              "Передача документации и сертификатов",
              "Обучение врача и ассистента",
              "Настройка интеграций с CAD/CAM ПО",
              "Подключение к удалённой поддержке",
            ].map((s) => <div key={s} className="flex gap-2"><span className="text-accent">✓</span> {s}</div>)}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { t: "Сроки", d: "От 1 до 14 дней в зависимости от региона и сложности монтажа." },
            { t: "Стоимость", d: "По Москве — бесплатно при заказе от 500 000 ₽." },
            { t: "Документы", d: "ТТН, договор, акт, счёт-фактура, сертификаты, гарантийный талон." },
          ].map((c) => (
            <div key={c.t} className="p-6 rounded-2xl border border-border">
              <div className="font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  ),
});
