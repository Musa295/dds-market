import printerDlpRed from "@/assets/products/printer-dlp-red.jpg";
import printerDlpEdge2 from "@/assets/products/printer-dlp-edge-2.jpg";
import millingMachine from "@/assets/products/milling-machine.jpg";
import millingMachine2 from "@/assets/products/milling-machine-2.jpg";
import sinteringFurnace from "@/assets/products/sintering-furnace.jpg";
import sinteringFurnace2 from "@/assets/products/sintering-furnace-2.jpg";
import sinteringFurnace3 from "@/assets/products/sintering-furnace-3.jpg";
import porcelainFurnace from "@/assets/products/porcelain-furnace.jpg";
import porcelainFurnace2 from "@/assets/products/porcelain-furnace-2.jpg";
import porcelainFurnace3 from "@/assets/products/porcelain-furnace-3.jpg";
import porcelainFurnace4 from "@/assets/products/porcelain-furnace-4.jpg";
import porcelainFurnace5 from "@/assets/products/porcelain-furnace-5.jpg";
import porcelainFurnaceCompact from "@/assets/products/porcelain-furnace-compact.jpg";
import porcelainFurnaceCompact2 from "@/assets/products/porcelain-furnace-compact-2.jpg";
import laserSintering from "@/assets/products/laser-sintering.jpg";
import laserSintering2 from "@/assets/products/laser-sintering-2.jpg";
import laserSintering3 from "@/assets/products/laser-sintering-3.jpg";
import laserSintering4 from "@/assets/products/laser-sintering-4.jpg";
import dustCollector from "@/assets/products/dust-collector.jpg";
import dustCollector2 from "@/assets/products/dust-collector-2.jpg";
import zirconiaDisc from "@/assets/products/zirconia-disc.jpg";
import zirconiaDiscXtcera from "@/assets/products/zirconia-disc-xtcera.jpg";
import zirconiaDiscAidite from "@/assets/products/zirconia-disc-aidite.jpg";
import pmmaDisc from "@/assets/products/pmma-disc.jpg";
import millingInside from "@/assets/products/milling-inside.jpg";
import printerMini from "@/assets/products/printer-rayshape-mini.jpg";
import scannerBlz1 from "@/assets/products/scanner-blz-ls100-1.jpg";
import scannerBlz2 from "@/assets/products/scanner-blz-ls100-2.jpg";
import scannerBlz3 from "@/assets/products/scanner-blz-ls100-3.jpg";
import scannerBlz4 from "@/assets/products/scanner-blz-ls100-4.jpg";
import srefo1 from "@/assets/products/srefo-r1207-1.jpg";
import srefo2 from "@/assets/products/srefo-r1207-2.jpg";
import srefo3 from "@/assets/products/srefo-r1207-3.jpg";
import srefo4 from "@/assets/products/srefo-r1207-4.jpg";
import dentalBurs from "@/assets/products/dental-burs.jpg";
import photopolymerResin from "@/assets/products/photopolymer-resin.jpg";
import lithiumDisilicate from "@/assets/products/lithium-disilicate.jpg";
import titaniumDisc from "@/assets/products/titanium-disc.jpg";
import titaniumInstrument from "@/assets/products/titanium-instrument.jpg";
import resinVat from "@/assets/products/resin-vat.jpg";
import waxDisc from "@/assets/products/wax-disc.jpg";

export const SITE = {
  name: "DDS MARKET",
  fullName: "Digital Dentistry Solutions Market",
  tagline: "Цифровая стоматология. Оборудование и решения для клиник и лабораторий в Москве.",
  phone: "+7 (930) 989-57-37",
  phoneHref: "tel:+79309895737",
  phoneSecondary: "+7 (977) 929-02-00",
  phoneSecondaryHref: "tel:+79779290200",
  email: "ddsmarket@mail.ru",
  address: "г. Москва, 1-я Новокузьминская ул., 11",
  hours: "Пн–Пт 09:00–18:00 · Сб 10:00–17:00 (без перерыва)",
  telegram: "https://t.me/dds_moscow",
  whatsapp: "https://wa.me/79309895737",
  max: "https://max.ru/dds_moscow",
};

export const NAV = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/services", label: "Услуги" },
  { to: "/milling", label: "Фрезерный центр" },
  { to: "/laboratory", label: "Лаборатория" },
  { to: "/delivery", label: "Доставка" },
  { to: "/promo", label: "Акции" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  brand: string;
  price: string;
  short: string;
  features: string[];
  image?: string;
  images?: string[];
  description?: string[];
  specs?: { label: string; value: string }[];
  inStock?: boolean;
  sku?: string;
  badge?: string;
};

export const CATEGORIES = [
  "Фрезерные станки",
  "3D-принтеры по металлу (SLM)",
  "3D-принтеры",
  "3D-сканеры",
  "Вытяжки для станков",
  "Печи спекания и обжига керамики",
  "Фотополимерные смолы",
  "Аппараты для анодирования",
  "Расходные материалы",
] as const;

export const CONSUMABLE_SUBCATEGORIES = [
  "Циркониевые диски",
  "PMMA и воск",
  "Титановые диски и блоки",
  "Фрезы",
  "Дисиликат лития",
  "Фотополимеры",
  "Ванночки и плёнки",
] as const;

export const DEFAULT_SPECS: { label: string; value: string }[] = [
  { label: "Габариты", value: "820×750×720 мм" },
  { label: "Вес", value: "193 кг" },
  { label: "Электропитание", value: "Однофазный ток, 220 Вольт" },
  { label: "Максимальная мощность", value: "2,5 кВт" },
  { label: "Мощность шпинделя", value: "1,8 кВт" },
  { label: "Количество осей", value: "5" },
  { label: "Размеры рабочей камеры", value: "220×160×120 мм" },
  { label: "Тип обработки", value: "Сухая" },
  { label: "Скорость шпинделя", value: "До 60 000 об/мин" },
  { label: "Скорость перемещения", value: "До 6000 мм/мин" },
  { label: "Количество фрез", value: "10 фрез" },
  { label: "Смена фрез", value: "Автоматическая" },
  { label: "Автокалибровка", value: "Есть" },
  { label: "Охлаждение шпинделя", value: "Жидкостное" },
];

export const PRODUCTS: Product[] = [
  // ===== Фрезерные станки =====
  {
    slug: "xtcera-x-mill-500-pro",
    name: "Фрезерный станок XTCERA X-Mill 500 Pro",
    category: "Фрезерные станки",
    brand: "XTCERA",
    price: "от 3 399 500 ₽",
    short: "5-осевой фрезерный центр для сухой и мокрой обработки.",
    features: ["5 осей", "Сухая и мокрая обработка", "Шпиндель 60 000 об/мин", "Магазин на 16 фрез"],
    image: millingMachine,
    images: [millingMachine, millingInside, millingMachine2],
  },
  {
    slug: "xtcera-x-mill-600se",
    name: "Фрезерный станок XTCERA X-Mill 600SE",
    category: "Фрезерные станки",
    brand: "XTCERA",
    price: "от 2 899 500 ₽",
    short: "4-осевой фрезерный центр для сухой обработки циркония, PMMA и воска.",
    features: ["4 оси", "Шпиндель 40 000 об/мин", "Габариты 780×600×1750 мм", "Вес 230 кг"],
    image: millingMachine2,
    images: [millingMachine2, millingInside, millingMachine],
    specs: [
      { label: "Габариты", value: "780×600×1750 мм" },
      { label: "Вес", value: "230 кг" },
      { label: "Количество осей", value: "4" },
      { label: "Скорость шпинделя", value: "До 40 000 об/мин" },
      { label: "Электропитание", value: "220 В" },
      { label: "Тип обработки", value: "Сухая" },
    ],
  },
  {
    slug: "blz-milling-station",
    name: "Фрезерный станок BLZ Mill 5X",
    category: "Фрезерные станки",
    brand: "BLZ Tech Dental",
    price: "от 1 999 500 ₽",
    short: "5-осевой компактный фрезер для зуботехнической лаборатории.",
    features: ["5 осей", "Автосмена фрез", "Жидкостное охлаждение", "Совместим с открытым CAD"],
    image: millingInside,
    images: [millingInside, millingMachine],
  },
  {
    slug: "crable-mill-pro",
    name: "Фрезерный станок CRABLE Mill Pro",
    category: "Фрезерные станки",
    brand: "CRABLE",
    price: "от 1 749 500 ₽",
    short: "Универсальный фрезерный станок для CAD/CAM-производства реставраций.",
    features: ["5 осей", "Сухая/мокрая обработка", "Магазин фрез", "Сенсорный экран"],
    image: millingMachine2,
    images: [millingMachine2, millingInside],
  },

  // ===== 3D-принтеры по металлу (SLM) =====
  {
    slug: "deskmetal-x1-slm",
    name: "SLM-принтер DeskMetal X1",
    category: "3D-принтеры по металлу (SLM)",
    brand: "DeskMetal",
    price: "от 8 849 500 ₽",
    short: "Селективное лазерное плавление CoCr и титана для каркасов и абатментов.",
    features: ["Лазер 200 Вт", "Толщина слоя 20 мкм", "CoCr / Ti6Al4V", "Камера с инертным газом"],
    image: laserSintering,
    images: [laserSintering, laserSintering2, laserSintering3, laserSintering4],
  },

  // ===== 3D-принтеры =====
  {
    slug: "rayshape-edge-mini",
    name: "3D-принтер RayShape Edge Mini",
    category: "3D-принтеры",
    brand: "RayShape",
    price: "64 500 ₽",
    short: "Компактный DLP-принтер для моделей, кап и хирургических шаблонов.",
    features: ["DLP 405 нм", "XY 50 мкм", "Открытая система смол", "Touch-экран"],
    image: printerMini,
    images: [printerMini, printerDlpRed],
    sku: "1322",
    badge: "Хит продаж",
    inStock: true,
  },
  {
    slug: "rayshape-edge-e2",
    name: "3D-принтер RayShape Edge E2",
    category: "3D-принтеры",
    brand: "RayShape",
    price: "от 189 500 ₽",
    short: "Профессиональный DLP-принтер с увеличенной зоной печати.",
    features: ["DLP 405 нм", "XY 62 мкм", "Wi-Fi / Ethernet", "Авто-калибровка"],
    image: printerDlpEdge2,
    images: [printerDlpEdge2, printerMini],
  },

  // ===== 3D-сканеры =====
  {
    slug: "scanner-blz-ls100",
    name: "3D-сканер BLZ LS100",
    category: "3D-сканеры",
    brand: "BLZ Tech Dental",
    price: "по запросу",
    short: "Лабораторный 3D-сканер для стоматологических слепков. Скан дуги за 10 секунд.",
    features: [
      "2 камеры по 1,6 Мп",
      "Точность 8 микрон",
      "Скан дуги за 10 секунд",
      "Форматы STL, PLY, OBJ",
      "Сканирование в цвете",
      "Металлический корпус",
    ],
    image: scannerBlz1,
    images: [scannerBlz1, scannerBlz2, scannerBlz3, scannerBlz4],
    sku: "1323",
    description: [
      "3D сканер BLZ LS100 — лабораторный сканер, предназначенный для сканирования стоматологических слепков. На основе 3D моделей можно выполнять диагностику и составлять план лечения или изготавливать индивидуальные ортодонтические изделия, такие как: коронки, мосты, импланты и др. Весь процесс сканирования, включая верхнюю, нижнюю дугу и штампы, выполнить за 2 минуты.",
      "BLZ LS100 имеет множество преимуществ, например: высокая точность и скорость сканирования, а также компактный и удобный дизайн. Благодаря высокой точности измерений, постобработка 3D модели и дальнейшее производство ортодонтических изделий упрощается.",
      "Программное обеспечение сканера BLZ LS100 имеет удобный и интуитивно понятный интерфейс, который делает процесс сканирования максимально простым для пользователя.",
    ],
    specs: [
      { label: "Камеры", value: "2 × 1,6 Мп" },
      { label: "Точность", value: "8 микрон" },
      { label: "Скорость скана дуги", value: "10 секунд" },
      { label: "Полный скан (верх+низ+штампы)", value: "2 минуты" },
      { label: "Форматы экспорта", value: "STL, PLY, OBJ" },
      { label: "Сканирование в цвете", value: "Да" },
      { label: "Корпус", value: "Металлический, матовый чёрный" },
    ],
  },
  {
    slug: "scanner-blz-ls200",
    name: "3D-сканер BLZ LS200",
    category: "3D-сканеры",
    brand: "BLZ Tech Dental",
    price: "по запросу",
    short: "Лабораторный сканер с увеличенной точностью и расширенной комплектацией.",
    features: ["2 камеры по 5 Мп", "Точность 5 микрон", "Скан дуги за 9 секунд", "STL/PLY/OBJ"],
    image: scannerBlz2,
    images: [scannerBlz2, scannerBlz3, scannerBlz4, scannerBlz1],
    sku: "1324",
  },
  {
    slug: "scanner-xtcera-autoscan",
    name: "3D-сканер XTCERA AutoScan",
    category: "3D-сканеры",
    brand: "XTCERA",
    price: "по запросу",
    short: "Автоматический лабораторный 3D-сканер с быстрой сменой моделей.",
    features: ["Автоматическая загрузка моделей", "Точность 7 микрон", "Цветное сканирование", "Открытые форматы"],
    image: scannerBlz3,
    images: [scannerBlz3, scannerBlz1, scannerBlz4],
    sku: "1325",
  },
  {
    slug: "scanner-shining-3d",
    name: "3D-сканер Shining 3D AutoScan DS",
    category: "3D-сканеры",
    brand: "Shining 3D",
    price: "по запросу",
    short: "Профессиональный лабораторный сканер для CAD-моделирования реставраций.",
    features: ["Двойные камеры 5 Мп", "Точность 4 микрона", "Скан челюсти 14 сек", "Поддержка артикулятора"],
    image: scannerBlz4,
    images: [scannerBlz4, scannerBlz2, scannerBlz1],
    sku: "1326",
  },

  // ===== Вытяжки для станков =====
  {
    slug: "dust-collector-srefo-r407",
    name: "Вытяжка Srefo R-407-1",
    category: "Вытяжки для станков",
    brand: "Srefo",
    price: "89 500 ₽",
    short: "Промышленная вытяжка без мешка для CAM-фрезеров.",
    features: ["Мощность 1200 Вт", "Питание 220 В", "Без мешка", "Авторежим со станком"],
    image: dustCollector,
    images: [dustCollector, dustCollector2],
    sku: "1328",
    inStock: true,
  },
  {
    slug: "dust-collector-pro-1500",
    name: "Пылеулавливатель Srefo Dust-Pro 1500",
    category: "Вытяжки для станков",
    brand: "Srefo",
    price: "от 159 500 ₽",
    short: "Промышленная вытяжка для зуботехнических лабораторий с HEPA-фильтрацией.",
    features: ["1500 Вт", "HEPA H13", "4 режима мощности", "Мобильное шасси"],
    image: dustCollector2,
    images: [dustCollector2, dustCollector],
    sku: "1329",
  },
  {
    slug: "dust-collector-compact",
    name: "Вытяжка Srefo Compact Dust 800",
    category: "Вытяжки для станков",
    brand: "Srefo",
    price: "от 69 500 ₽",
    short: "Настольная вытяжка для небольших фрезерных станков и постобработки.",
    features: ["800 Вт", "HEPA-фильтр", "Тихая работа", "Компактный корпус"],
    image: dustCollector,
    sku: "1330",
  },

  // ===== Печи =====
  {
    slug: "zetin-furnace",
    name: "Печь спекания Zetin",
    category: "Печи спекания и обжига керамики",
    brand: "Zetin",
    price: "от 549 500 ₽",
    short: "Высокотемпературная печь для спекания циркониевых каркасов.",
    features: ["До 1600 °C", "Цикл от 30 минут", "Сенсорное управление", "Камера до 100 единиц"],
    image: sinteringFurnace,
    images: [sinteringFurnace, sinteringFurnace2, sinteringFurnace3],
  },
  {
    slug: "upcera-gt1",
    name: "Печь Upcera GT1 / Vicce GT1",
    category: "Печи спекания и обжига керамики",
    brand: "Upcera / Vicce",
    price: "от 449 500 ₽",
    short: "Скоростная печь для спекания циркония за 25–45 минут.",
    features: ["До 1600 °C", "Скоростной цикл", "Цветной TFT", "200 программ"],
    image: sinteringFurnace2,
    images: [sinteringFurnace2, sinteringFurnace3],
  },
  {
    slug: "upcera-gt1-pro",
    name: "Печь Upcera GT1 Pro / Vicce GT1 Pro",
    category: "Печи спекания и обжига керамики",
    brand: "Upcera / Vicce",
    price: "от 599 500 ₽",
    short: "Усовершенствованная скоростная печь с расширенной камерой.",
    features: ["До 1620 °C", "Цикл от 20 минут", "Расширенная камера", "Удалённый мониторинг"],
    image: sinteringFurnace3,
    images: [sinteringFurnace3, sinteringFurnace],
  },
  {
    slug: "upcera-a7-plus",
    name: "Печь Upcera A7+ / Vicce A7+",
    category: "Печи спекания и обжига керамики",
    brand: "Upcera / Vicce",
    price: "от 699 500 ₽",
    short: "Многофункциональная печь для спекания и обжига керамики.",
    features: ["До 1600 °C", "Универсальные программы", "Большая камера", "Сенсорный экран"],
    image: porcelainFurnace,
    images: [porcelainFurnace, porcelainFurnace2, porcelainFurnace3, porcelainFurnace4, porcelainFurnace5],
  },
  {
    slug: "porcelain-furnace-compact",
    name: "Компакт-печь Vicce Ceramic Mini",
    category: "Печи спекания и обжига керамики",
    brand: "Vicce",
    price: "от 274 500 ₽",
    short: "Настольная компактная печь для небольших лабораторий и клиник.",
    features: ["До 1100 °C", "Цветной TFT-экран", "Тихая работа", "Автокалибровка"],
    image: porcelainFurnaceCompact,
    images: [porcelainFurnaceCompact, porcelainFurnaceCompact2],
  },

  // ===== Фотополимерные смолы (категория) =====
  {
    slug: "resin-model",
    name: "Фотополимер Model 1 кг",
    category: "Фотополимерные смолы",
    brand: "RayShape",
    price: "от 8 400 ₽",
    short: "Фотополимер для печати ортодонтических моделей.",
    features: ["405 нм", "Низкая усадка", "Лёгкая постобработка", "Бежевый/серый"],
    image: photopolymerResin,
  },
  {
    slug: "resin-castable",
    name: "Фотополимер Castable 1 кг",
    category: "Фотополимерные смолы",
    brand: "RayShape",
    price: "от 14 100 ₽",
    short: "Выжигаемый фотополимер для литья каркасов и коронок.",
    features: ["405 нм", "Без зольного остатка", "Точная детализация", "Фиолетовый"],
    image: photopolymerResin,
  },
  {
    slug: "resin-temp-crown",
    name: "Фотополимер Temp Crown 1 кг",
    category: "Фотополимерные смолы",
    brand: "RayShape",
    price: "от 18 500 ₽",
    short: "Биосовместимый фотополимер для временных коронок и мостов.",
    features: ["Класс IIa", "Высокая прочность", "Цвета VITA A1–A3.5", "Полируется"],
    image: photopolymerResin,
  },

  // ===== Аппараты для анодирования =====
  {
    slug: "srefo-r-1207",
    name: "Аппарат для анодирования титана Srefo R-1207",
    category: "Аппараты для анодирования",
    brand: "Srefo",
    price: "от 149 500 ₽",
    short: "Аппарат для электрохимического анодирования титановых абатментов. Pure titanium plating instrument.",
    features: ["Мощность 1000 Вт", "Питание 220 В, 50 Гц", "Цифровой индикатор", "Палитра цветов VITA"],
    image: srefo1,
    images: [srefo1, srefo3, srefo4, srefo2],
    sku: "R-1207",
    inStock: true,
    specs: [
      { label: "Модель", value: "R-1207" },
      { label: "Мощность", value: "1000 Вт" },
      { label: "Питание", value: "220 В, 50 Гц" },
      { label: "Применение", value: "Анодирование чистого титана" },
      { label: "Управление", value: "Цифровой индикатор, кнопка RESET" },
    ],
  },

  // ===== Расходные материалы =====
  {
    slug: "zirconia-disc-xtcera-multilayer",
    name: "Циркониевый диск XTCERA 3D Multilayer",
    category: "Расходные материалы",
    subcategory: "Циркониевые диски",
    brand: "XTCERA",
    price: "от 6 400 ₽",
    short: "Многослойный циркониевый диск с естественным градиентом цвета.",
    features: ["98,5 × 14 мм", "Прочность 1200 МПа", "Полупрозрачность 49%", "VITA A1–D4"],
    image: zirconiaDisc,
  },
  {
    slug: "zirconia-disc-xtcera-st",
    name: "Циркониевый диск XTCERA ST",
    category: "Расходные материалы",
    subcategory: "Циркониевые диски",
    brand: "XTCERA",
    price: "от 4 900 ₽",
    short: "Однослойный циркониевый диск повышенной прочности.",
    features: ["98,5 мм", "Прочность 1450 МПа", "Для каркасов и мостов", "Толщины 10–25 мм"],
    image: zirconiaDiscXtcera,
  },
  {
    slug: "zirconia-disc-xtcera-ht",
    name: "Циркониевый диск XTCERA HT",
    category: "Расходные материалы",
    subcategory: "Циркониевые диски",
    brand: "XTCERA",
    price: "от 5 400 ₽",
    short: "Высокотранслюцентный циркониевый диск для эстетических реставраций.",
    features: ["98,5 мм", "Полупрозрачность 45%", "VITA A1–D4", "1100 МПа"],
    image: zirconiaDisc,
  },
  {
    slug: "zirconia-disc-aidite-3d-pro",
    name: "Циркониевый диск Aidite 3D Pro Multilayer",
    category: "Расходные материалы",
    subcategory: "Циркониевые диски",
    brand: "Aidite",
    price: "от 7 100 ₽",
    short: "Многослойный циркониевый диск Aidite с плавным градиентом цвета.",
    features: ["98,5 × 14/18/22 мм", "Прочность 1150 МПа", "Полупрозрачность 49%", "VITA 16 цветов"],
    image: zirconiaDiscAidite,
  },
  {
    slug: "zirconia-disc-aidite-super",
    name: "Циркониевый диск Aidite Super High Translucent",
    category: "Расходные материалы",
    subcategory: "Циркониевые диски",
    brand: "Aidite",
    price: "от 5 900 ₽",
    short: "Высокотранслюцентный диск Aidite для монолитных коронок передней группы.",
    features: ["98,5 мм", "Транслюцентность до 57%", "VITA A1–D4", "Прочность 800 МПа"],
    image: zirconiaDiscAidite,
  },
  {
    slug: "pmma-monolayer",
    name: "PMMA Monolayer диск",
    category: "Расходные материалы",
    subcategory: "PMMA и воск",
    brand: "XTCERA",
    price: "от 2 700 ₽",
    short: "PMMA-диск для временных коронок и мостов.",
    features: ["98,5 мм", "Однотонный", "Высокая полировка", "Различные толщины"],
    image: pmmaDisc,
  },
  {
    slug: "wax-cad-cam",
    name: "Воск зуботехнический для CAD/CAM фрезерования",
    category: "Расходные материалы",
    subcategory: "PMMA и воск",
    brand: "XTCERA",
    price: "от 1 800 ₽",
    short: "Восковой диск для фрезерования каркасов под литьё.",
    features: ["98,5 мм", "Синий/зелёный", "Выгорает без остатка", "Толщины 10–25 мм"],
    image: waxDisc,
  },
  {
    slug: "titanium-disc-sino",
    name: "Стоматологический титановый диск Sino Ti Metal TI TC4",
    category: "Расходные материалы",
    subcategory: "Титановые диски и блоки",
    brand: "Sino Ti Metal",
    price: "от 11 500 ₽",
    short: "Титановый диск Ti6Al4V для фрезерования каркасов и абатментов.",
    features: ["Ti6Al4V (TC4)", "98,5 мм", "Высокая чистота", "Сертификат"],
    image: titaniumDisc,
    sku: "1340",
  },
  {
    slug: "titanium-block-sino",
    name: "Титановый блок квадратный Sino Ti Metal Ti TC4",
    category: "Расходные материалы",
    subcategory: "Титановые диски и блоки",
    brand: "Sino Ti Metal",
    price: "от 6 900 ₽",
    short: "Квадратный титановый блок для фрезерования индивидуальных абатментов.",
    features: ["Ti6Al4V (TC4)", "Квадратный профиль", "Совместим с системами CAD/CAM", "Сертификат"],
    image: titaniumInstrument,
    sku: "1341",
  },
  {
    slug: "calibration-bur",
    name: "Калибровочная фреза для XTCERA / Yucera / Aidite",
    category: "Расходные материалы",
    subcategory: "Фрезы",
    brand: "XTCERA",
    price: "9 500 ₽",
    short: "Калибровочная фреза для станков XTCERA X-MILL 500Plus, Yucera, Aidite.",
    features: ["Точная калибровка", "Долговечная", "Совместимость с XTCERA/Yucera/Aidite"],
    image: dentalBurs,
    sku: "1342",
  },
  {
    slug: "burs-zirconia-pmma",
    name: "Фрезы по циркону и PMMA",
    category: "Расходные материалы",
    subcategory: "Фрезы",
    brand: "XTCERA",
    price: "2 500 ₽",
    short: "Фрезы для любого станка по циркону и PMMA.",
    features: ["Универсальная совместимость", "Различные диаметры", "Долговечное покрытие"],
    image: dentalBurs,
    sku: "1343",
  },
  {
    slug: "burs-titanium-glass-ceramic",
    name: "Фрезы по титану и стеклокерамике",
    category: "Расходные материалы",
    subcategory: "Фрезы",
    brand: "XTCERA",
    price: "от 3 400 ₽",
    short: "Фрезы по титану, стеклокерамике, любого размера, для любого станка.",
    features: ["Алмазное покрытие", "Любые диаметры", "Универсальная совместимость"],
    image: dentalBurs,
  },
  {
    slug: "lithium-disilicate",
    name: "Дисиликат лития (блоки)",
    category: "Расходные материалы",
    subcategory: "Дисиликат лития",
    brand: "Upcera",
    price: "от 1 100 ₽",
    short: "Блоки из дисиликата лития для прессования и фрезерования.",
    features: ["Высокая прочность", "Естественная транслюцентность", "Цвета VITA"],
    image: lithiumDisilicate,
  },
  {
    slug: "resin-vat-1",
    name: "Ванночка для 3D-принтера",
    category: "Расходные материалы",
    subcategory: "Ванночки и плёнки",
    brand: "RayShape",
    price: "от 7 100 ₽",
    short: "Сменная ванночка для DLP/LCD-принтеров.",
    features: ["Алюминиевый каркас", "FEP-плёнка", "Совместима с RayShape"],
    image: resinVat,
  },
  {
    slug: "fep-film",
    name: "FEP-плёнка для ванночек",
    category: "Расходные материалы",
    subcategory: "Ванночки и плёнки",
    brand: "RayShape",
    price: "от 1 400 ₽",
    short: "Сменная FEP-плёнка для ванночек 3D-принтеров.",
    features: ["Высокая прозрачность", "Долговечность", "Различные размеры"],
    image: resinVat,
  },
];

export const SERVICES = [
  { title: "Подбор оборудования", desc: "Подберём оборудование под ваш бюджет и задачи — от стартового комплекта до полного цифрового цикла лаборатории." },
  { title: "Поставка и монтаж", desc: "Прямые поставки от производителей, монтаж и пусконаладка инженерами с сертификатами." },
  { title: "Сервисное обслуживание", desc: "Регулярное ТО, ремонт, поверка. Подменный фонд на время ремонта." },
];
