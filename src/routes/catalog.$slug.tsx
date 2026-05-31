import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PRODUCTS, SITE, DEFAULT_SPECS, type Product } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Phone, Mail, MessageCircle, Truck, ShieldCheck, Wrench, Package } from "lucide-react";

export const Route = createFileRoute("/catalog/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — DDS MARKET` },
      { name: "description", content: loaderData?.product.short ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <PageShell title="Товар не найден" crumbs={[{ label: "Каталог", to: "/catalog" }, { label: "Не найден" }]}>
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-muted-foreground mb-6">Запрошенный товар отсутствует в каталоге.</p>
        <Button asChild><Link to="/catalog">Вернуться в каталог</Link></Button>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Ошибка" crumbs={[{ label: "Каталог", to: "/catalog" }]}>
      <div className="container mx-auto px-6 py-20 text-center text-muted-foreground">{error.message}</div>
    </PageShell>
  ),
  component: ProductPage,
});

const TABS = [
  { id: "description", label: "Описание" },
  { id: "specs", label: "Характеристики" },
  { id: "delivery", label: "Доставка и оплата" },
  { id: "warranty", label: "Гарантия и сервис" },
] as const;

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const rawImgs = product.images && product.images.length > 0 ? product.images : product.image ? [product.image] : [];
  // dedupe identical images so we don't show arrows on duplicates
  const imgs = Array.from(new Set(rawImgs));
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState<typeof TABS[number]["id"]>("description");
  const hasMany = imgs.length > 1;

  const description = product.description ?? [
    `${product.name} — профессиональное решение категории «${product.category}» от ${product.brand}. ${product.short}`,
    "Оборудование сертифицировано для применения в стоматологических клиниках и зуботехнических лабораториях на территории РФ. Поставляется напрямую от производителя с полным комплектом документации и русифицированным интерфейсом.",
    "Наши инженеры выполняют пусконаладку, обучение персонала и берут устройство на сервисное сопровождение. Подменный фонд на время ремонта.",
  ];

  const specs = product.specs ?? DEFAULT_SPECS;

  return (
    <PageShell
      title={product.name}
      subtitle={product.short}
      crumbs={[{ label: "Каталог", to: "/catalog" }, { label: product.category }]}
    >
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-white rounded-2xl relative overflow-hidden border border-border">
            {imgs.length > 0 ? (
              <img src={imgs[idx]} alt={product.name} className="absolute inset-0 w-full h-full object-contain p-8" />
            ) : (
              <div className="absolute inset-0 bg-mesh opacity-30" />
            )}
            {hasMany && (
              <>
                <button onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)} aria-label="Предыдущее фото" className="absolute left-3 top-1/2 -translate-y-1/2 size-10 grid place-items-center rounded-full bg-card/90 backdrop-blur border border-border shadow-sm hover:bg-card">
                  <ChevronLeft className="size-5" />
                </button>
                <button onClick={() => setIdx((i) => (i + 1) % imgs.length)} aria-label="Следующее фото" className="absolute right-3 top-1/2 -translate-y-1/2 size-10 grid place-items-center rounded-full bg-card/90 backdrop-blur border border-border shadow-sm hover:bg-card">
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
            <div className="absolute top-3 left-3 text-xs bg-card/90 backdrop-blur px-2.5 py-1 rounded-full font-medium">{product.brand}</div>
            <div className="absolute top-3 right-3 text-xs bg-accent/90 text-accent-foreground px-2.5 py-1 rounded-full font-medium">В наличии</div>
          </div>
          {hasMany && (
            <div className="mt-4 grid grid-cols-5 gap-3">
              {imgs.map((src, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`aspect-square rounded-lg overflow-hidden border-2 bg-muted transition-all ${i === idx ? "border-primary" : "border-border hover:border-primary/50"}`}>
                  <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="text-sm text-muted-foreground">{product.category} · {product.brand}</div>
          <h2 className="mt-2 font-display text-3xl font-bold">{product.name}</h2>
          <div className="mt-1 text-xs text-muted-foreground">Артикул: {product.sku ?? product.slug.toUpperCase()}</div>
          <div className="mt-5 flex items-baseline gap-3">
            <div className="font-display font-bold text-3xl text-primary">{product.price}</div>
            <span className="text-xs text-accent font-semibold uppercase tracking-wider">В наличии</span>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">{product.short}</p>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {product.features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl border border-border bg-card">
            <div className="font-semibold mb-3">Запросить КП и условия поставки</div>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link to="/contacts">Оставить заявку</Link></Button>
              <Button variant="outline" asChild><a href={SITE.phoneHref}><Phone className="size-4 mr-2" />{SITE.phone}</a></Button>
              <Button variant="outline" asChild><a href={SITE.telegram} target="_blank" rel="noopener"><MessageCircle className="size-4 mr-2" />Telegram</a></Button>
              <Button variant="outline" asChild><a href={`mailto:${SITE.email}`}><Mail className="size-4 mr-2" />Email</a></Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-muted/50 flex items-start gap-2">
              <ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" />
              <div><div className="font-semibold">Гарантия</div><div className="text-muted-foreground">12–24 мес.</div></div>
            </div>
            <div className="p-3 rounded-xl bg-muted/50 flex items-start gap-2">
              <Truck className="size-4 text-primary shrink-0 mt-0.5" />
              <div><div className="font-semibold">Доставка</div><div className="text-muted-foreground">Москва и РФ</div></div>
            </div>
            <div className="p-3 rounded-xl bg-muted/50 flex items-start gap-2">
              <Wrench className="size-4 text-primary shrink-0 mt-0.5" />
              <div><div className="font-semibold">Монтаж</div><div className="text-muted-foreground">Сертифиц.</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="container mx-auto px-6 pb-12">
        <div className="border-b border-border flex flex-wrap gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 text-sm font-medium border-b-2 -mb-px transition ${tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {tab === "description" && (
            <div className="prose prose-neutral max-w-3xl">
              {description.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              <h3 className="font-display text-xl font-bold mt-8 mb-3 text-foreground">Ключевые преимущества</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground">
                    <Check className="size-4 text-primary shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === "specs" && (
            <div className="max-w-3xl">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3 pr-6 text-muted-foreground w-1/2">{s.label}</td>
                      <td className="py-3 font-medium">{s.value}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-border">
                    <td className="py-3 pr-6 text-muted-foreground">Производитель</td>
                    <td className="py-3 font-medium">{product.brand}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-6 text-muted-foreground">Категория</td>
                    <td className="py-3 font-medium">{product.category}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-6 text-muted-foreground">Артикул</td>
                    <td className="py-3 font-medium">{product.sku ?? product.slug.toUpperCase()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {tab === "delivery" && (
            <div className="max-w-3xl grid sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl border border-border bg-card">
                <Package className="size-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Самовывоз со склада</h3>
                <p className="text-sm text-muted-foreground">{SITE.address}. Режим работы: {SITE.hours}.</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-card">
                <Truck className="size-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Транспортные компании</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <b>MagicTrans</b> — 1–7 дней</li>
                  <li>• ПЭК — 1–7 дней</li>
                  <li>• Деловые линии — 1–7 дней</li>
                  <li>• СДЭК — 1–7 дней</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-card sm:col-span-2">
                <h3 className="font-semibold mb-2">Способы оплаты</h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• Наличными в офисе</li>
                  <li>• Безналичным переводом</li>
                  <li>• Лизинг через партнёров</li>
                </ul>
              </div>
            </div>
          )}

          {tab === "warranty" && (
            <div className="max-w-3xl space-y-4">
              <p className="text-muted-foreground leading-relaxed">Официальная гарантия производителя 12–24 месяца. Все обязательства подтверждены сервисным контрактом и зарегистрированы в РФ.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <ShieldCheck className="size-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Что входит в гарантию</h3>
                  <p className="text-sm text-muted-foreground">Замена вышедших из строя узлов, выезд инженера, диагностика, ПО-обновления.</p>
                </div>
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <Wrench className="size-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Постгарантийный сервис</h3>
                  <p className="text-sm text-muted-foreground">Контракты ТО, ремонт любой сложности, подменный фонд на период ремонта.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      <div className="container mx-auto px-6 pb-16">
        <h3 className="font-display text-2xl font-bold mb-6">Похожие товары</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4).map((p) => (
            <Link key={p.slug} to="/catalog/$slug" params={{ slug: p.slug }} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] bg-white relative overflow-hidden">
                {p.image && <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-contain p-4" />}
              </div>
              <div className="p-4">
                <div className="text-xs text-muted-foreground">{p.category}</div>
                <div className="font-semibold mt-1 text-sm leading-tight">{p.name}</div>
                <div className="mt-2 text-primary font-bold text-sm">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
