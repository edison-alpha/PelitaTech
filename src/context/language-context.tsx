import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  // Navbar
  'nav.about': {
    en: 'About Us',
    id: 'Tentang Kami'
  },
  'nav.services': {
    en: 'Services',
    id: 'Layanan'
  },
  'nav.portfolio': {
    en: 'Portfolio',
    id: 'Portofolio'
  },
  'nav.maps': {
    en: 'Maps',
    id: 'Lokasi'
  },
  'nav.pricing': {
    en: 'Pricing',
    id: 'Harga'
  },
  'nav.careers': {
    en: 'Careers',
    id: 'Karir'
  },
  'nav.contact': {
    en: 'Contact Us',
    id: 'Hubungi Kami'
  },
  
  // Hero
  'hero.badge': {
    en: 'Web Development Experts',
    id: 'Ahli Pengembangan Web'
  },
  'hero.title': {
    en: 'Bring Your Dream Website to Life with Top-Tier Digital Solutions',
    id: 'Wujudkan Website Impian Anda dengan Solusi Digital Terbaik'
  },
  'hero.subtitle': {
    en: 'We create stunning, high-performance websites that drive results. From corporate sites to e-commerce platforms, we deliver excellence.',
    id: 'Kami membuat website yang menakjubkan dan berkinerja tinggi yang memberikan hasil. Dari situs korporat hingga platform e-commerce, kami memberikan keunggulan.'
  },
  'hero.cta.start': {
    en: 'Get Started',
    id: 'Mulai Sekarang'
  },
  'hero.cta.watch': {
    en: 'Watch Showreel',
    id: 'Tonton Showreel'
  },
  'hero.trusted': {
    en: 'Trusted by',
    id: 'Dipercaya oleh'
  },
  'hero.clients': {
    en: '200+ clients',
    id: '200+ klien'
  },
  
  // Services
  'services.title': {
    en: 'Our Services',
    id: 'Layanan Kami'
  },
  'services.subtitle': {
    en: 'We offer comprehensive web development solutions tailored to your specific needs and business goals.',
    id: 'Kami menawarkan solusi pengembangan web komprehensif yang disesuaikan dengan kebutuhan dan tujuan bisnis Anda.'
  },
  'services.corporate.title': {
    en: 'Corporate Websites',
    id: 'Website Korporat'
  },
  'services.corporate.desc': {
    en: 'Professional websites that represent your brand identity and values with a focus on user experience and conversion optimization.',
    id: 'Website profesional yang merepresentasikan identitas dan nilai merek Anda dengan fokus pada pengalaman pengguna dan optimasi konversi.'
  },
  'services.ecommerce.title': {
    en: 'E-Commerce Solutions',
    id: 'Solusi E-Commerce'
  },
  'services.ecommerce.desc': {
    en: 'Custom online stores with secure payment gateways, inventory management, and seamless checkout experiences to boost sales.',
    id: 'Toko online kustom dengan gateway pembayaran yang aman, manajemen inventaris, dan pengalaman checkout yang lancar untuk meningkatkan penjualan.'
  },
  'services.webapps.title': {
    en: 'Web Applications',
    id: 'Aplikasi Web'
  },
  'services.webapps.desc': {
    en: 'Powerful web applications with robust functionality, real-time features, and intuitive interfaces for enhanced productivity.',
    id: 'Aplikasi web yang kuat dengan fungsionalitas yang tangguh, fitur real-time, dan antarmuka intuitif untuk produktivitas yang lebih baik.'
  },
  'services.responsive.title': {
    en: 'Responsive Design',
    id: 'Desain Responsif'
  },
  'services.responsive.desc': {
    en: 'Mobile-first websites that adapt perfectly to all devices, ensuring your content looks great on phones, tablets, and desktops.',
    id: 'Website mobile-first yang beradaptasi dengan sempurna di semua perangkat, memastikan konten Anda terlihat bagus di ponsel, tablet, dan desktop.'
  },
  'services.seo.title': {
    en: 'SEO Optimization',
    id: 'Optimasi SEO'
  },
  'services.seo.desc': {
    en: 'Strategic optimization to improve your search engine rankings, drive organic traffic, and increase your online visibility.',
    id: 'Optimasi strategis untuk meningkatkan peringkat mesin pencari Anda, mendorong lalu lintas organik, dan meningkatkan visibilitas online Anda.'
  },
  'services.maintenance.title': {
    en: 'Maintenance & Support',
    id: 'Pemeliharaan & Dukungan'
  },
  'services.maintenance.desc': {
    en: 'Ongoing technical support, regular updates, security monitoring, and performance optimization to keep your website running smoothly.',
    id: 'Dukungan teknis berkelanjutan, pembaruan rutin, pemantauan keamanan, dan optimasi kinerja untuk menjaga website Anda berjalan dengan lancar.'
  },
  'services.learnMore': {
    en: 'Learn More',
    id: 'Pelajari Lebih Lanjut'
  },
  
  // Why Choose Us
  'why.title': {
    en: 'Why Choose Us',
    id: 'Mengapa Memilih Kami'
  },
  'why.subtitle': {
    en: 'We combine technical expertise with creative excellence to deliver exceptional digital experiences.',
    id: 'Kami menggabungkan keahlian teknis dengan keunggulan kreatif untuk memberikan pengalaman digital yang luar biasa.'
  },
  'why.projects': {
    en: 'Projects Completed',
    id: 'Proyek Selesai'
  },
  'why.clients': {
    en: 'Satisfied Clients',
    id: 'Klien Puas'
  },
  'why.experience': {
    en: 'Years Experience',
    id: 'Tahun Pengalaman'
  },
  'why.satisfaction': {
    en: 'Client Satisfaction',
    id: 'Kepuasan Klien'
  },
  'why.trusted.title': {
    en: 'Trusted by Leading Companies',
    id: 'Dipercaya oleh Perusahaan Terkemuka'
  },
  'why.trusted.subtitle': {
    en: "We've worked with a diverse range of clients from startups to Fortune 500 companies.",
    id: 'Kami telah bekerja dengan berbagai klien dari startup hingga perusahaan Fortune 500.'
  },
  
  // Portfolio
  'portfolio.title': {
    en: 'Our Portfolio',
    id: 'Portofolio Kami'
  },
  'portfolio.subtitle': {
    en: "Explore our recent projects and see how we've helped businesses achieve their digital goals.",
    id: 'Jelajahi proyek terbaru kami dan lihat bagaimana kami telah membantu bisnis mencapai tujuan digital mereka.'
  },
  'portfolio.viewAll': {
    en: 'View All Projects',
    id: 'Lihat Semua Proyek'
  },
  'portfolio.viewProject': {
    en: 'View Project',
    id: 'Lihat Proyek'
  },
  
  // Maps
  'maps.title': {
    en: 'Our Locations',
    id: 'Lokasi Kami'
  },
  'maps.subtitle': {
    en: "Find our offices around the world. We're always ready to help you with your web development needs.",
    id: 'Temukan kantor kami di seluruh dunia. Kami selalu siap membantu kebutuhan pengembangan web Anda.'
  },
  'maps.phone': {
    en: 'Phone',
    id: 'Telepon'
  },
  'maps.email': {
    en: 'Email',
    id: 'Email'
  },
  
  // Case Studies
  'cases.title': {
    en: 'Success Stories',
    id: 'Kisah Sukses'
  },
  'cases.subtitle': {
    en: 'See how our web development solutions have helped businesses achieve remarkable results.',
    id: 'Lihat bagaimana solusi pengembangan web kami telah membantu bisnis mencapai hasil yang luar biasa.'
  },
  'cases.client': {
    en: 'Client',
    id: 'Klien'
  },
  'cases.readFull': {
    en: 'Read Full Case Study',
    id: 'Baca Studi Kasus Lengkap'
  },
  'cases.readCase': {
    en: 'Read Case Study',
    id: 'Baca Studi Kasus'
  },
  
  // Testimonials
  'testimonials.title': {
    en: 'Client Testimonials',
    id: 'Testimoni Klien'
  },
  'testimonials.subtitle': {
    en: "Don't just take our word for it. Here's what our clients have to say about working with us.",
    id: 'Jangan hanya percaya kata-kata kami. Inilah yang dikatakan klien kami tentang bekerja dengan kami.'
  },
  
  // Contact
  'contact.title': {
    en: 'Get in Touch',
    id: 'Hubungi Kami'
  },
  'contact.subtitle': {
    en: "Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing together.",
    id: 'Punya proyek dalam pikiran? Kami ingin mendengar dari Anda. Hubungi kami dan mari ciptakan sesuatu yang luar biasa bersama.'
  },
  'contact.info.title': {
    en: 'Contact Information',
    id: 'Informasi Kontak'
  },
  'contact.info.email': {
    en: 'Email',
    id: 'Email'
  },
  'contact.info.phone': {
    en: 'Phone',
    id: 'Telepon'
  },
  'contact.info.address': {
    en: 'Address',
    id: 'Alamat'
  },
  'contact.social': {
    en: 'Follow us on social media',
    id: 'Ikuti kami di media sosial'
  },
  'contact.form.title': {
    en: 'Send us a message',
    id: 'Kirim pesan kepada kami'
  },
  'contact.form.firstName': {
    en: 'First Name',
    id: 'Nama Depan'
  },
  'contact.form.lastName': {
    en: 'Last Name',
    id: 'Nama Belakang'
  },
  'contact.form.email': {
    en: 'Email',
    id: 'Email'
  },
  'contact.form.subject': {
    en: 'Subject',
    id: 'Subjek'
  },
  'contact.form.message': {
    en: 'Message',
    id: 'Pesan'
  },
  'contact.form.send': {
    en: 'Send Message',
    id: 'Kirim Pesan'
  },
  'contact.form.firstNamePlaceholder': {
    en: 'Enter your first name',
    id: 'Masukkan nama depan Anda'
  },
  'contact.form.lastNamePlaceholder': {
    en: 'Enter your last name',
    id: 'Masukkan nama belakang Anda'
  },
  'contact.form.emailPlaceholder': {
    en: 'Enter your email',
    id: 'Masukkan email Anda'
  },
  'contact.form.subjectPlaceholder': {
    en: 'Enter subject',
    id: 'Masukkan subjek'
  },
  'contact.form.messagePlaceholder': {
    en: 'Enter your message',
    id: 'Masukkan pesan Anda'
  },
  
  // Footer
  'footer.description': {
    en: 'We create stunning, high-performance websites and digital solutions that help businesses thrive in the digital landscape.',
    id: 'Kami membuat website dan solusi digital yang menakjubkan dan berkinerja tinggi yang membantu bisnis berkembang dalam lanskap digital.'
  },
  'footer.company': {
    en: 'Company',
    id: 'Perusahaan'
  },
  'footer.services': {
    en: 'Services',
    id: 'Layanan'
  },
  'footer.resources': {
    en: 'Resources',
    id: 'Sumber Daya'
  },
  'footer.webDev': {
    en: 'Web Development',
    id: 'Pengembangan Web'
  },
  'footer.ecommerce': {
    en: 'E-Commerce',
    id: 'E-Commerce'
  },
  'footer.uiux': {
    en: 'UI/UX Design',
    id: 'Desain UI/UX'
  },
  'footer.seo': {
    en: 'SEO Optimization',
    id: 'Optimasi SEO'
  },
  'footer.maintenance': {
    en: 'Maintenance',
    id: 'Pemeliharaan'
  },
  'footer.blog': {
    en: 'Blog',
    id: 'Blog'
  },
  'footer.caseStudies': {
    en: 'Case Studies',
    id: 'Studi Kasus'
  },
  'footer.testimonials': {
    en: 'Testimonials',
    id: 'Testimoni'
  },
  'footer.faq': {
    en: 'FAQ',
    id: 'FAQ'
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    id: 'Kebijakan Privasi'
  },
  'footer.rights': {
    en: 'All rights reserved.',
    id: 'Seluruh hak cipta dilindungi.'
  },
  'footer.terms': {
    en: 'Terms of Service',
    id: 'Ketentuan Layanan'
  },
  'footer.cookie': {
    en: 'Cookie Policy',
    id: 'Kebijakan Cookie'
  },
  
  // Language Selector
  'language': {
    en: 'Language',
    id: 'Bahasa'
  },
  'language.en': {
    en: 'English',
    id: 'Inggris'
  },
  'language.id': {
    en: 'Indonesian',
    id: 'Indonesia'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('id'); // Default to Indonesian

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};