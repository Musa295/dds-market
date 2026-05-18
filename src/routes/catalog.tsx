import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PRODUCTS, CATEGORIES } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/catalog")({
  head: () => ({ meta: [
    { title: "Каталог оборудования — Digital Dentistry Solutions" },
    { name: "description", content: "Каталог стоматологического оборудования: сканеры, фрезерные станки, 3D-принтеры, печи, ПО, расходные материалы." },
  ]}),
  component: CatalogPage,
  validateSearch: (s: Record<string, unknown>) => ({ q: (s.q as string) ?? "", cat: (s.cat as string) ?? "" }),
});

function CatalogPage() {
  const { q: qParam, cat: catParam } = Route.useSearch();
  const [q, setQ] = useState(qParam);
  const [cat, setCat] = useState(catParam);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchQ = !q || (p.name + p.short + p.brand + p.category).toLowerCase().includes(q.toLowerCase());
      const matchC = !cat || p.category === cat;
      return matchQ && matchC;
    });
  }, [q, cat]);

  return (
    <PageShell
      title="Каталог оборудования"
      subtitle="Сертифицированное оборудование от ведущих мировых производителей. Прямые поставки, гарантия, сервис."
      crumbs={[{ label: "Каталог" }]}
    >
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Поиск</label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Название, бренд…" className="w-full h-10 pl-10 pr-3 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Категории</div>
            <div className="space-y-1">
              <button onClick={() => setCat("")} className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${cat === "" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>Все категории</button>
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{c}</button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 text-sm text-muted-foreground">Найдено: <span className="font-semibold text-foreground">{filtered.length}</span></div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <article key={p.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative">
                  <div className="absolute inset-0 bg-mesh opacity-30" />
                  <div className="absolute top-3 left-3 text-xs bg-card/90 backdrop-blur px-2.5 py-1 rounded-full font-medium">{p.brand}</div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-semibold text-lg leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {p.features.slice(0,3).map((f) => <li key={f}>• {f}</li>)}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-display font-bold text-primary">{p.price}</div>
                    <Button size="sm" asChild><Link to="/contacts">Запросить</Link></Button>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full p-10 text-center border border-dashed rounded-2xl text-muted-foreground">Ничего не найдено. Попробуйте изменить запрос.</div>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
