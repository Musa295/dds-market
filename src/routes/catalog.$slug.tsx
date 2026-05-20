import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PRODUCTS, SITE, type Product } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/catalog/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — DDS` },
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

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const imgs = product.images && product.images.length > 0 ? product.images : product.image ? [product.image] : [];
  const [idx, setIdx] = useState(0);
  const hasMany = imgs.length > 1;

  return (
    <PageShell
      title={product.name}
      subtitle={product.short}
      crumbs={[{ label: "Каталог", to: "/catalog" }, { label: product.category }]}
    >
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-2xl relative overflow-hidden border border-border">
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
          <div className="mt-4 font-display font-bold text-3xl text-primary">{product.price}</div>
          <p className="mt-5 text-muted-foreground leading-relaxed">{product.short}</p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Характеристики</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
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

          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="p-4 rounded-xl bg-muted/50">
              <div className="font-semibold">Гарантия</div>
              <div className="text-muted-foreground mt-1">12–24 месяца</div>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <div className="font-semibold">Доставка</div>
              <div className="text-muted-foreground mt-1">По Москве и РФ</div>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <div className="font-semibold">Монтаж</div>
              <div className="text-muted-foreground mt-1">Сертифицированные инженеры</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="container mx-auto px-6 pb-16">
        <h3 className="font-display text-2xl font-bold mb-6">Похожие товары</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4).map((p) => (
            <Link key={p.slug} to="/catalog/$slug" params={{ slug: p.slug }} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
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
