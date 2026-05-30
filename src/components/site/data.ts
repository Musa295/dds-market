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
import titaniumInstrument from "@/assets/products/titanium-instrument.jpg";
import laserSintering from "@/assets/products/laser-sintering.jpg";
import laserSintering2 from "@/assets/products/laser-sintering-2.jpg";
import laserSintering3 from "@/assets/products/laser-sintering-3.jpg";
import laserSintering4 from "@/assets/products/laser-sintering-4.jpg";
import dustCollector from "@/assets/products/dust-collector.jpg";
import dustCollector2 from "@/assets/products/dust-collector-2.jpg";
import printedModels from "@/assets/products/printed-models.jpg";
import cadSoftware from "@/assets/products/cad-software.jpg";
import zirconiaDisc from "@/assets/products/zirconia-disc.jpg";
import scannerBlz1 from "@/assets/products/scanner-blz-ls100-1.jpg";
import scannerBlz2 from "@/assets/products/scanner-blz-ls100-2.jpg";
import scannerBlz3 from "@/assets/products/scanner-blz-ls100-3.jpg";
import scannerBlz4 from "@/assets/products/scanner-blz-ls100-4.jpg";

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
};

export const CATEGORIES = [
  "Фрезерные станки",
  "3D-принтеры по металлу",
  "3D-принтеры",
  "3D-сканеры",
  "Вытяжки для станков",
  "Фотополимерные смолы",
  "Аппараты для анодирования",
  "Расходные материалы",
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
  {
    slug: "milling-x-mill-500",
    name: "Фрезерный станок X-Mill 500 Pro",
    category: "Фрезерные станки",
    brand: "DDS Pro",
    price: "от 3 450 000 ₽",
    short: "5-осевой фрезерный центр для сухой и мокрой обработки.",
    features: ["5 осей", "Сухая и мокрая обработка", "Шпиндель 60 000 об/мин", "Магазин на 16 фрез"],
    image: millingMachine,
    images: [millingMachine, millingMachine2],
  },
  {
    slug: "printer-dlp-edge",
    name: "DLP 3D-принтер Edge One",
    category: "3D-принтеры",
    brand: "DDS Pro",
    price: "от 1 290 000 ₽",
    short: "DLP-принтер для моделей, кап, хирургических шаблонов.",
    features: ["XY 62 мкм", "385 нм LED", "Открытая система смол", "Wi-Fi / Ethernet"],
    image: printerDlpRed,
    images: [printerDlpRed, printerDlpEdge2],
  },
  {
    slug: "laser-sintering-deskfab",
    name: "SLM-принтер DeskMetal X1",
    category: "3D-принтеры",
    brand: "DDS Pro",
    price: "от 8 900 000 ₽",
    short: "Селективное лазерное плавление CoCr и титана для каркасов и абатментов.",
    features: ["Лазер 200 Вт", "Толщина слоя 20 мкм", "CoCr / Ti6Al4V", "Камера с инертным газом"],
    image: laserSintering,
    images: [laserSintering, laserSintering2, laserSintering3, laserSintering4],
  },
  {
    slug: "sintering-furnace-zir-1600",
    name: "Печь спекания Zir-Fast 1600",
    category: "Печи спекания и обжига керамики",
    brand: "DDS Pro",
    price: "от 620 000 ₽",
    short: "Скоростное спекание циркониевых каркасов за 25 минут.",
    features: ["До 1600 °C", "Скорость 25 мин", "Камера на 100 единиц", "Сенсорный экран"],
    image: sinteringFurnace,
    images: [sinteringFurnace, sinteringFurnace2, sinteringFurnace3],
  },
  {
    slug: "porcelain-furnace-a7",
    name: "Печь обжига керамики Ceramic A7",
    category: "Печи спекания и обжига керамики",
    brand: "DDS Pro",
    price: "от 410 000 ₽",
    short: "Профессиональная вакуумная печь для прессовки и обжига керамики.",
    features: ["До 1200 °C", "Вакуумный насос", "200 программ", "Сенсорное управление"],
    image: porcelainFurnace,
    images: [porcelainFurnace, porcelainFurnace2, porcelainFurnace3, porcelainFurnace4, porcelainFurnace5],
  },
  {
    slug: "porcelain-furnace-compact",
    name: "Компакт-печь Ceramic Mini",
    category: "Печи спекания и обжига керамики",
    brand: "DDS Pro",
    price: "от 280 000 ₽",
    short: "Настольная компактная печь для небольших лабораторий и клиник.",
    features: ["До 1100 °C", "Цветной TFT-экран", "Тихая работа", "Автокалибровка"],
    image: porcelainFurnaceCompact,
    images: [porcelainFurnaceCompact, porcelainFurnaceCompact2],
  },
  {
    slug: "titanium-plating",
    name: "Установка титанирования Ti-Coat",
    category: "Лабораторное оборудование",
    brand: "DDS Pro",
    price: "от 195 000 ₽",
    short: "Аппарат нанесения покрытия из чистого титана на каркасы.",
    features: ["Камера 60 мм", "Авто-режим", "Цифровой дисплей", "Быстрая загрузка"],
    image: titaniumInstrument,
  },
  {
    slug: "dust-collector-pro",
    name: "Пылеулавливатель Dust-Pro 1500",
    category: "Вытяжки и пылеулавливатели",
    brand: "DDS Pro",
    price: "от 165 000 ₽",
    short: "Промышленная вытяжка для зуботехнических лабораторий с HEPA-фильтрацией.",
    features: ["1500 Вт", "HEPA H13", "4 режима мощности", "Мобильное шасси"],
    image: dustCollector,
    images: [dustCollector, dustCollector2],
  },
  {
    slug: "print-platforms",
    name: "Платформы и наборы печати",
    category: "Расходные материалы",
    brand: "DDS Pro",
    price: "от 8 500 ₽",
    short: "Готовые платформы с напечатанными моделями, каппами и протезами для демо.",
    features: ["Совместимость DLP/SLA", "Аллюминий", "Многоразовое использование", "Точная посадка"],
    image: printedModels,
  },
  {
    slug: "exocad-dentalcad",
    name: "exocad DentalCAD Flex",
    category: "Программное обеспечение",
    brand: "exocad",
    price: "от 320 000 ₽",
    short: "Профессиональное CAD-ПО для зуботехнической лаборатории.",
    features: ["Все модули", "Открытая архитектура", "Облачные обновления", "Поддержка 24/7"],
    image: cadSoftware,
  },
  {
    slug: "zirconia-disc",
    name: "Циркониевый диск Multilayer",
    category: "Расходные материалы",
    brand: "DDS Pro",
    price: "от 6 500 ₽",
    short: "Многослойный диск с естественным градиентом цвета.",
    features: ["98.5 × 14 мм", "Прочность 1200 МПа", "Полупрозрачность 49%", "VITA A1–D4"],
    image: zirconiaDisc,
  },
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
    description: [
      "3D сканер BLZ LS100 — лабораторный сканер, предназначенный для сканирования стоматологических слепков. На основе 3D моделей можно выполнять диагностику и составлять план лечения или изготавливать индивидуальные ортодонтические изделия, такие как: коронки, мосты, импланты и др. Весь процесс сканирования, включая верхнюю, нижнюю дугу и штампы, выполнить за 2 минуты.",
      "BLZ LS100 имеет множество преимуществ, например: высокая точность и скорость сканирования, а также компактный и удобный дизайн. Благодаря высокой точности измерений, постобработка 3D модели и дальнейшее производство ортодонтических изделий упрощается. Быстрота работы оборудования позволяет организовать потоковое сканирование. Кроме того, данное устройство крайне компактное, что позволяет его разместить в любой лаборатории или стоматологическом кабинете.",
      "Программное обеспечение сканера BLZ LS100 имеет удобный и интуитивно понятный интерфейс, который делает процесс сканирования максимально простым для пользователя. Кроме того, софт имеет расширенный функционал для опытных пользователей.",
    ],
    specs: [
      { label: "Камеры", value: "2 × 1,6 Мп" },
      { label: "Точность", value: "8 микрон" },
      { label: "Скорость скана дуги", value: "10 секунд" },
      { label: "Полный скан (верх+низ+штампы)", value: "2 минуты" },
      { label: "Форматы экспорта", value: "STL, PLY, OBJ" },
      { label: "Сканирование в цвете", value: "Да" },
      { label: "Корпус", value: "Металлический, матовый чёрный" },
      { label: "Комплектация", value: "Богатая, набор адаптеров и штампов" },
    ],
  },
];

export const SERVICES = [
  { title: "Подбор оборудования", desc: "Подберём решение под объём клиники и бюджет — от стартового набора до полного цифрового цикла." },
  { title: "Поставка и монтаж", desc: "Прямые поставки от производителей, монтаж и пусконаладка инженерами с сертификатами." },
  { title: "Сервисное обслуживание", desc: "Регулярное ТО, ремонт, поверка. Подменный фонд на время ремонта." },
  { title: "Интеграция CAD/CAM", desc: "Настройка цифрового workflow от сканера до готового протеза." },
];
