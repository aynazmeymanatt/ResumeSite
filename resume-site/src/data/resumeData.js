// همه‌ی محتوای رزومه اینجاست — هر وقت خواستی چیزی رو عوض کنی فقط همین فایل رو ویرایش کن.

import universityGate from "../assets/university-gate.jpg";
import akuLogo from "../assets/aku-logo.jpg";
import sampadLogo from "../assets/sampad-logo.png";
import powerbiDashboard from "../assets/powerbi-dashboard.jpg";
import uiUxImage from "../assets/ui-ux.jpg";
import flagFa from "../assets/flag-fa.png";
import flagEn from "../assets/flag-en.png";
import flagKu from "../assets/flag-ku.png";
import flagDe from "../assets/flag-de.png";
import iconPolyLife from "../assets/project-polylife.svg";
import iconWeather from "../assets/project-weather.svg";
import iconZarinpal from "../assets/project-zarinpal.svg";
import iconTodo from "../assets/project-todo.svg";
import iconSmartFilter from "../assets/project-smartfilter.svg";
import iconDynamicStore from "../assets/project-dynamicstore.svg";
import iconCollaboCanvas from "../assets/project-collabocanvas.svg";

export const profile = {
  name: "آیناز میمنت",
  nameEn: "Aynaz Meymanat",
  title: "تحلیل‌گر داده | توسعه‌دهنده فرانت‌اند",
  tagline:
    "از ساختن رابط‌های کاربری با ری‌اکت، به کشف الگو در دل داده رسیدم — حالا زنجیره‌ی تأمین دارو رو با Power BI روایت می‌کنم.",
  location: "تهران، ایران",
};

export const contact = {
  email: "aynazmeymanat@gmail.com",
  phone: "+98 939 036 3794",
  github: "https://github.com/aynazmeymanatt",
  linkedin: "#", // لینک لینکدینت رو اینجا جایگزین کن
};

export const skills = {
  "زبان‌های برنامه‌نویسی": ["JavaScript", "Python", "Java", "SQL", "C"],
  "داده و تحلیل": ["Power BI", "Data Analysis", "SQL"],
  "فرانت‌اند و ابزار": ["React", "HTML", "CSS", "Figma", "Git", "GitLab"],
  "روش و فرآیند": ["OOP", "Agile", "Scrum", "Jira"],
};

export const languages = [
  { name: "فارسی", level: "زبان مادری", value: 100, flag: flagFa },
  { name: "انگلیسی", level: "پیشرفته", value: 85, flag: flagEn },
  { name: "کردی", level: "زبان مادری", value: 100, flag: flagKu },
  { name: "آلمانی", level: "A1", value: 20, flag: flagDe },
];

// جدول زمانی تجربه — از قدیم به جدید (پایین‌ترین آیتم = جدیدترین)
export const experience = [
  {
    period: "دانشگاه صنعتی امیرکبیر",
    role: "دستیار آموزشی (TA) — درس مهندسی نرم‌افزار ۱",
    org: "پروژه‌ی پایانی درس — معماری میکروسرویس",
    points: [
      "برای پروژه‌ی پایانی درس که دانشجوها قرار بود میکروسرویس‌های جداگانه‌شون رو به هم وصل کنن، طراحی و توسعه‌ی فرانت‌اند هسته‌ی اصلی (Core) که همه‌ی سرویس‌ها بهش متصل می‌شدن بر عهده‌ی من بود.",
      "طراحی رابط کاربری در فیگما و پیاده‌سازی کامل همون طراحی با ری‌اکت.",
    ],
    tags: ["React.js", "Figma", "UI/UX"],
  },
  {
    period: "فریلنس",
    role: "توسعه‌دهنده فرانت‌اند",
    org: "پروژه‌محور",
    points: [
      "طراحی و توسعه‌ی رابط کاربری وب با ری‌اکت، از صفر تا پیاده‌سازی کامل کامپوننت‌ها و منطق سمت کلاینت.",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    period: "فریلنس",
    role: "طراح UI/UX",
    org: "پروژه‌محور",
    points: [
      "طراحی رابط کاربری و تجربه‌ی کاربری برای پروژه‌های مختلف در فیگما، از وایرفریم تا طراحی نهایی.",
    ],
    tags: ["Figma", "UI/UX", "Wireframing"],
    image: uiUxImage,
    imageSmall: true,
  },
  {
    period: "همکاری فعلی",
    role: "تحلیل‌گر داده",
    org: "سامان سلامت (TTAC) — زنجیره‌ی تأمین دارو",
    points: [
      "طراحی داشبوردهای Power BI برای رصد کامل زنجیره‌ی تأمین دارو: میزان و مسیر واردات، شرکت واردکننده، خرید توزیع‌کننده و توزیع بین داروخانه‌ها.",
      "ردیابی درصد افزایش قیمت دارو در هر مرحله تا رسیدن به دست مصرف‌کننده.",
      "گزارش لحظه‌ای موجودی داروخانه‌ها و یافتن نزدیک‌ترین داروخانه بر اساس موقعیت مکانی کاربر.",
      "استعلام داروهای مرتبط با هر کد ملی از پایگاه‌داده برای پیگیری دقیق‌تر مصرف.",
    ],
    tags: ["Power BI", "SQL", "Data Analysis"],
    image: powerbiDashboard,
  },
];

export const education = [
  {
    period: "۰۹/۲۰۲۳ — اکنون",
    place: "دانشگاه صنعتی امیرکبیر",
    degree: "کارشناسی مهندسی نرم‌افزار، گرایش فرعی هوش مصنوعی",
    location: "تهران، ایران",
    photo: universityGate,
    logo: akuLogo,
  },
  {
    period: "۲۰۲۰ — ۲۰۲۳",
    place: "بنیاد ملی نخبگان (سمپاد)",
    degree: "دیپلم دبیرستان — استعدادهای درخشان",
    location: "ایران",
    logo: sampadLogo,
  },
];

export const projects = [
  {
    name: "PolyLife",
    icon: iconPolyLife,
    subtitle: "پلتفرم اکوسیستم تناسب اندام",
    description:
      "طراحی UI/UX در فیگما و توسعه‌ی کامل فرانت‌اند با معماری میکروسرویس، صفحه‌ی فرود با نمایش دایره‌ای سرویس‌ها، افکت‌های هاور تعاملی، انیمیشن اسکرول و صفحات احراز هویت با ولیدیشن فرم.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Figma", "React Router"],
    link: "https://poly-life-core2.onrender.com",
    uiuxImage: uiUxImage,
  },
  {
    name: "پیش‌بینی آب‌وهوا",
    icon: iconWeather,
    subtitle: "اپلیکیشن وب هواشناسی",
    description:
      "اپلیکیشن ریسپانسیو پیش‌بینی آب‌وهوا با تشخیص موقعیت جغرافیایی، جست‌وجوی شهر و رندر لحظه‌ای داده از API با مدیریت state در ری‌اکت.",
    tags: ["React", "JavaScript", "OpenWeather API", "CSS"],
    link: "https://aynazmeymanatt.github.io/weather-app/",
  },
  {
    name: "کلون زرین‌پال",
    icon: iconZarinpal,
    subtitle: "صفحه‌ی درگاه پرداخت",
    description:
      "بازسازی ریسپانسیو صفحه‌ی اصلی درگاه پرداخت زرین‌پال با چیدمان مدرن و کامپوننت‌های UI قابل‌استفاده‌ی مجدد.",
    tags: ["HTML", "CSS"],
    link: "https://aynazmeymanatt.github.io/zarinpal-project/",
  },
  {
    name: "اپلیکیشن Todo",
    icon: iconTodo,
    subtitle: "مدیریت وظایف",
    description:
      "اپلیکیشن مدیریت وظایف با عملیات CRUD کامل، فیلتر کردن تسک‌ها و ذخیره‌سازی پایدار داده با Local Storage.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    link: "https://aynazmeymanatt.github.io/javascript-todo-app/",
  },
  {
    name: "فروشگاه با فیلتر هوشمند",
    icon: iconSmartFilter,
    subtitle: "فروشگاه آنلاین",
    description:
      "فروشگاه آنلاین تعاملی با فیلتر پویای محصولات، قابلیت جست‌وجو و طراحی کاملاً ریسپانسیو.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://aynazmeymanatt.github.io/product-filter-page/",
  },
  {
    name: "فروشگاه آنلاین پویا",
    icon: iconDynamicStore,
    subtitle: "فروشگاه اینترنتی",
    description:
      "رابط فروشگاه اینترنتی ریسپانسیو با مدیریت محصول و قابلیت سبد خرید.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
  {
    name: "CollaboCanvas",
    icon: iconCollaboCanvas,
    subtitle: "بوم طراحی مشترک بلادرنگ",
    description:
      "اپلیکیشن طراحی مشترک بلادرنگ با اصول OOP در جاوا، شامل ارتباط چندکاربره و همگام‌سازی بوم روی شبکه.",
    tags: ["Java", "OOP"],
    link: null,
  },
];

export const achievements = [
  {
    title: "رتبه‌ی برتر کنکور ۱۴۰۲",
    detail: "رتبه‌ی ۵۰۴ در میان بیش از ۱۵۰,۰۰۰ داوطلب دانشگاه‌های سراسر ایران (۰.۳٪ برتر).",
  },
  {
    title: "المپیاد کامپیوتر کشوری",
    detail: "راه‌یابی به مرحله‌ی دوم المپیاد کامپیوتر کشوری (۱۴۰۰ و ۱۴۰۱).",
  },
  {
    title: "مسابقه‌ی نقاشی",
    detail: "کسب رتبه‌ی اول در مسابقه‌ی نقاشی (۱۳۹۹).",
  },
];
