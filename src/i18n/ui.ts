export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export const defaultLang = 'vi';

export type Lang = keyof typeof languages;

export const ui = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.blog': 'Blog',
    'nav.contact': 'Liên hệ',
    'nav.cv': 'Tải CV',

    'hero.title': 'Xin chào, tôi là',
    'hero.name': 'Võ Ngọc Minh',
    'hero.role': 'Aspiring Data Engineer',
    'hero.pitch':
      'Tôi là người trái ngành đang tự học Data Engineering — xây dựng pipeline, mô hình hóa dữ liệu, và đưa data trở thành công cụ ra quyết định.',
    'hero.cta.projects': 'Xem dự án',
    'hero.cta.cv': 'Tải CV',

    'about.title': 'Hành trình của tôi',
    'about.intro':
      'Tôi chuyển hướng sang Data Engineering vì tin rằng dữ liệu là nền tảng của mọi quyết định tốt. Tôi đang xây dựng portfolio thực tế thay vì chỉ học lý thuyết.',
    'about.skills.title': 'Kỹ năng',
    'about.timeline.title': 'Quá trình học',

    'projects.title': 'Dự án',
    'projects.subtitle':
      'Ba dự án end-to-end thể hiện khả năng xây dựng data pipeline từ extract đến analytics.',
    'projects.viewRepo': 'Xem GitHub',
    'projects.viewCase': 'Đọc case study',
    'projects.techStack': 'Tech stack',
    'projects.status': 'Trạng thái',
    'projects.status.inProgress': 'Đang phát triển',
    'projects.status.completed': 'Hoàn thành',
    'projects.status.planned': 'Lên kế hoạch',

    'blog.title': 'Blog kỹ thuật',
    'blog.subtitle': 'Ghi chép quá trình học và xây portfolio.',
    'blog.empty': 'Chưa có bài viết. Bài đầu tiên sẽ ra mắt cùng Project 1.',

    'contact.title': 'Liên hệ',
    'contact.subtitle':
      'Đang tìm cơ hội Fresher/Intern Data Engineer. Hãy kết nối với tôi!',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.built': 'Xây dựng với Astro + Tailwind',
    'footer.year': '© 2026 Võ Ngọc Minh',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',

    'hero.title': "Hi, I'm",
    'hero.name': 'Vo Ngoc Minh',
    'hero.role': 'Aspiring Data Engineer',
    'hero.pitch':
      'Career-changer self-learning Data Engineering — building pipelines, modeling data, and turning raw data into decisions.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'Download CV',

    'about.title': 'My Journey',
    'about.intro':
      "I'm transitioning into Data Engineering because I believe data is the foundation of every good decision. I'm building a real-world portfolio instead of just consuming theory.",
    'about.skills.title': 'Skills',
    'about.timeline.title': 'Learning Path',

    'projects.title': 'Projects',
    'projects.subtitle':
      'Three end-to-end projects demonstrating the ability to build data pipelines from extract to analytics.',
    'projects.viewRepo': 'View on GitHub',
    'projects.viewCase': 'Read case study',
    'projects.techStack': 'Tech stack',
    'projects.status': 'Status',
    'projects.status.inProgress': 'In progress',
    'projects.status.completed': 'Completed',
    'projects.status.planned': 'Planned',

    'blog.title': 'Technical Blog',
    'blog.subtitle': 'Notes from my learning journey and portfolio build.',
    'blog.empty':
      'No posts yet. The first one ships alongside Project 1.',

    'contact.title': 'Contact',
    'contact.subtitle':
      "Looking for Fresher/Intern Data Engineer opportunities. Let's connect!",
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.built': 'Built with Astro + Tailwind',
    'footer.year': '© 2026 Vo Ngoc Minh',
  },
} as const;

export type UIKey = keyof (typeof ui)['vi'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function pathFor(lang: Lang, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (lang === defaultLang) {
    return clean ? `/${clean}/` : '/';
  }
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}
