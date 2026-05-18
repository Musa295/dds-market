export const SITE = {
  name: "Digital Dentistry Solutions",
  tagline: "Цифровая стоматология. Оборудование и решения для клиник и лабораторий в Москве.",
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "info@dds-moscow.ru",
  address: "г. Москва, ул. Ленинская Слобода, 19, БЦ «Омега Плаза»",
  telegram: "https://t.me/dds_moscow",
  whatsapp: "https://wa.me/74951234567",
};

export const NAV = [
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
};

export const CATEGORIES = [
  "Интраоральные сканеры",
  "Фрезерные станки",
  "3D-принтеры",
  "Печи спекания",
  "Программное обеспечение",
  "Расходные материалы",
] as const;

export const PRODUCTS: Product[] = [
  {
    slug: "intraoral-scanner-pro-x",
    name: "Интраоральный сканер Pro X",
    category: "Интраоральные сканеры",
    brand: "Medit",
    price: "от 980 000 ₽",
    short: "Высокоточный беспроводной сканер с открытой архитектурой данных.",
    features: ["Точность 8 мкм", "Открытые STL/PLY", "Вес 245 г", "Беспроводная работа до 4 ч"],
  },
  {
    slug: "milling-m5-axis",
    name: "Фрезерный станок M5 Axis",
    category: "Фрезерные станки",
    brand: "VHF",
    price: "от 3 450 000 ₽",
    short: "5-осевой фрезерный центр для сухой и мокрой обработки.",
    features: ["5 осей", "Сухая и мокрая", "Шпиндель 60 000 об/мин", "Магазин на 16 фрез"],
  },
  {
    slug: "printer-asiga-max",
    name: "3D-принтер Asiga MAX UV",
    category: "3D-принтеры",
    brand: "Asiga",
    price: "от 1 290 000 ₽",
    short: "DLP-принтер для моделей, кап, хирургических шаблонов.",
    features: ["XY 62 мкм", "385 нм LED", "Открытая система смол", "Wi-Fi / Ethernet"],
  },
  {
    slug: "sintering-furnace-zir",
    name: "Печь спекания Zir-Fast 1600",
    category: "Печи спекания",
    brand: "Dentsply",
    price: "от 620 000 ₽",
    short: "Скоростное спекание циркониевых каркасов за 25 минут.",
    features: ["До 1600 °C", "Скорость 25 мин", "Камера на 100 единиц", "Сенсорный экран"],
  },
  {
    slug: "exocad-dentalcad",
    name: "exocad DentalCAD Flex",
    category: "Программное обеспечение",
    brand: "exocad",
    price: "от 320 000 ₽",
    short: "Профессиональное CAD-ПО для зуботехнической лаборатории.",
    features: ["Все модули", "Открытая архитектура", "Облачные обновления", "Поддержка 24/7"],
  },
  {
    slug: "zirconia-disc",
    name: "Циркониевый диск Multilayer",
    category: "Расходные материалы",
    brand: "Aidite",
    price: "от 6 500 ₽",
    short: "Многослойный диск с естественным градиентом цвета.",
    features: ["98.5 × 14 мм", "Прочность 1200 МПа", "Полупрозрачность 49%", "VITA A1–D4"],
  },
];

export const SERVICES = [
  { title: "Подбор оборудования", desc: "Подберём решение под объём клиники и бюджет — от стартового набора до полного цифрового цикла." },
  { title: "Поставка и монтаж", desc: "Прямые поставки от производителей, монтаж и пусконаладка инженерами с сертификатами." },
  { title: "Обучение персонала", desc: "Курсы для врачей и техников: сканирование, CAD-моделирование, фрезерование, печать." },
  { title: "Сервисное обслуживание", desc: "Регулярное ТО, ремонт, поверка. Подменный фонд на время ремонта." },
  { title: "Trade-in и лизинг", desc: "Программы обмена старого оборудования и лизинг от партнёрских банков." },
  { title: "Интеграция CAD/CAM", desc: "Настройка цифрового workflow от сканера до готового протеза." },
];
