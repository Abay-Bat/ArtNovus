import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  autocad,
  sketchup,
  miro,
  trello,
  whatsapp,
  whatsapp_gray,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Возможности", // Features
    url: "#features",
  },
  {
    id: "1",
    title: "Цены", // Pricing
    url: "#pricing",
  },

  {
    id: "2",
    title: "Наша команда",
    url: "#team",
  },
  {
    id: "3",
    title: "instagram", 
    url: "https://www.instagram.com/artnovus_kz?igsh=aHJxdW54MXRhdmMw&utm_source=qr",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "С ArtNovus ремонт становится простым, прозрачным и безопасным.";

export const collabContent = [
  {
    id: "0",
    title: "Интеграция с комфортом",
    text: collabText,
  },
  {
    id: "1",
    title: "Умный подход к ремонту",
  },
  {
    id: "2",
    title: "Прозрачность и контроль",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "1",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "2",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "AutoCAD",
    icon: autocad, // you'd need to add this icon to your assets
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "SketchUp",
    icon: sketchup, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "Miro",
    icon: miro, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Trello",
    icon: trello, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "WhatsApp",
    icon: whatsapp, // add icon to assets
    width: 36,
    height: 36,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Базовый",
    description: "Онлайн-консультация и предварительный расчёт",
    price: "от 500 000 до 1 500 000 ₸",
    features: [
      "Бесплатная консультация по ремонту",
      "Индивидуальные рекомендации по материалам и дизайну",
      "Ознакомление с платформой и её возможностями",
    ],
  },
  {
    id: "1",
    title: "Премиум",
    description: "Полное сопровождение, 3D-дизайн, приоритетная поддержка",
    price: "от 1 500 000 до 3 000 000 ₸",
    features: [
      "Персональный менеджер проекта",
      "3D-дизайн и визуализация интерьера",
      "Приоритетная поддержка и контроль сроков",
    ],
  },
  {
    id: "2",
    title: "Бизнес",
    description: "Индивидуальные решения, комплексный ремонт под ключ",
    price: "от 3 000 000 ₸ и выше",
    features: [
      "Персонализированный подход под ваш проект",
      "Полный цикл работ от идеи до сдачи объекта",
      "Выделенный менеджер и расширенные возможности контроля",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ответ на любой вопрос",
    text: "ArtNovus даёт понятные и точные ответы для каждого клиента — быстро и без лишних усилий.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Любой проект — вместе с вами",
    text: "Независимо от идеи или масштаба — мы реализуем любой проект, который вы задумали.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Энергия, как никогда раньше",
    text: "ArtNovus открывает новый взгляд на электричество — инновации, удобство и мощность в каждой детали.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/artnovus_kz?igsh=aHJxdW54MXRhdmMw&utm_source=qr",
  },
  {
    id: "1",
    title: "WhatsApp",
    iconUrl: whatsapp_gray, // If this is still a Telegram icon, update it to a WhatsApp icon if available
    url: "https://wa.me/77000606290",
  },
];
