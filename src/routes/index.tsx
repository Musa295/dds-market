import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Microscope, Printer, Wrench, GraduationCap, Truck, ShieldCheck, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, SERVICES, SITE } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Dentistry Solutions — Стоматологическое оборудование в Москве" },
      { name: "description", content: "Поставка цифрового стоматологического оборудования в Москве: сканеры, фрезерные станки, 3D-принтеры, печи. Монтаж, обучение, сервис." },
    ],
  }),
  component: Index,
});

const ICONS = [Microscope, Cpu, Printer, Wrench, GraduationCap, Truck];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="container relative mx-auto px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
              <Sparkles className="size-3.5" /> Цифровая стоматология · Москва
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Оборудование для современной <span className="text-primary">стоматологии</span> и зуботехнических лабораторий
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Сканеры, фрезерные станки, 3D-принтеры, печи и ПО от ведущих мировых производителей. Полный цикл — от подбора до сервиса.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/catalog">Перейти в каталог <ArrowRight className="size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contacts">Получить консультацию</Link></Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "12+", l: "лет на рынке" },
                { n: "850+", l: "оснащённых клиник" },
                { n: "24/7", l: "техподдержка" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-1 shadow-2xl">
              <div className="size-full rounded-[1.4rem] bg-card overflow-hidden relative">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="relative size-full grid place-items-center p-10">
                  <svg viewBox="0 0 200 200" className="size-full">
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="oklch(0.42 0.09 210)" />
                        <stop offset="100%" stopColor="oklch(0.72 0.13 185)" />
                      </linearGradient>
                    </defs>
                    {/* stylized tooth */}
                    <path d="M100 30 C 60 30, 40 60, 45 110 C 48 145, 65 175, 80 175 C 92 175, 92 145, 100 145 C 108 145, 108 175, 120 175 C 135 175, 152 145, 155 110 C 160 60, 140 30, 100 30 Z" fill="url(#g1)" opacity="0.95"/>
                    <circle cx="100" cy="100" r="4" fill="white" opacity="0.6"/>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-xs text-muted-foreground">Поверка и сертификация</div>
                <div className="font-semibold flex items-center gap-1.5"><ShieldCheck className="size-4 text-accent" /> ISO 13485</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-xs text-muted-foreground">Гарантия</div>
                <div className="font-semibold">до 3 лет</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm font-medium text-primary uppercase tracking-wider">Каталог</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Категории оборудования</h2>
          </div>
          <Link to="/catalog" className="text-primary font-medium hover:underline inline-flex items-center gap-1">Весь каталог <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Link key={cat} to="/catalog" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all">
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 text-primary mb-4 group-hover:scale-110 transition">
                  <Icon className="size-6" />
                </div>
                <div className="font-semibold text-lg">{cat}</div>
                <div className="mt-3 text-sm text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">Смотреть <ArrowRight className="size-3" /></div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-surface py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Популярное оборудование</h2>
            <Link to="/catalog" className="text-primary font-medium hover:underline">Все товары →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.slice(0, 6).map((p) => (
              <article key={p.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative">
                  <div className="absolute inset-0 bg-mesh opacity-30" />
                  <div className="absolute top-3 left-3 text-xs bg-card/90 backdrop-blur px-2.5 py-1 rounded-full font-medium">{p.brand}</div>
                  <div className="absolute bottom-3 right-3 text-xs bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-medium">{p.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-display text-lg font-bold text-primary">{p.price}</div>
                    <Button size="sm" variant="ghost">Узнать <ArrowRight className="size-3" /></Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm font-medium text-primary uppercase tracking-wider">Услуги</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Полный цикл сопровождения</h2>
          <p className="mt-4 text-muted-foreground">От подбора и поставки до обучения персонала и круглосуточного сервиса.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MILLING + LAB blocks */}
      <section className="container mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        {[
          { to: "/milling", title: "Фрезерный центр", desc: "Изготовление каркасов и реставраций на 5-осевом оборудовании.", grad: "from-primary to-accent" },
          { to: "/laboratory", title: "Зуботехническая лаборатория", desc: "Полный цикл цифрового и классического протезирования.", grad: "from-accent to-primary" },
        ].map((b) => (
          <Link key={b.to} to={b.to} className={`group relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br ${b.grad} text-primary-foreground min-h-[260px] flex flex-col justify-end`}>
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <h3 className="relative font-display text-3xl md:text-4xl font-bold">{b.title}</h3>
            <p className="relative mt-3 opacity-90 max-w-md">{b.desc}</p>
            <div className="relative mt-6 inline-flex items-center gap-2 font-medium">Подробнее <ArrowRight className="size-4 group-hover:translate-x-1 transition" /></div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Нужна консультация инженера?</h2>
            <p className="mt-2 opacity-80">Подберём комплект под задачи вашей клиники или лаборатории.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg"><a href={SITE.phoneHref}>{SITE.phone}</a></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/contacts">Написать нам</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
