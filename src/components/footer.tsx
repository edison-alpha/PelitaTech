import React from 'react';
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from '../context/language-context';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const footerLinks = [
    {
      title: t('footer.company'),
      links: [
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.services'), href: "#services" },
        { name: t('nav.portfolio'), href: "#portfolio" },
        { name: t('nav.careers'), href: "#careers" },
        { name: t('nav.contact'), href: "#contact" }
      ]
    },
    {
      title: t('footer.services'),
      links: [
        { name: t('footer.webDev'), href: "#" },
        { name: t('footer.ecommerce'), href: "#" },
        { name: t('footer.uiux'), href: "#" },
        { name: t('footer.seo'), href: "#" },
        { name: t('footer.maintenance'), href: "#" }
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { name: t('footer.blog'), href: "#" },
        { name: t('footer.caseStudies'), href: "#" },
        { name: t('footer.testimonials'), href: "#" },
        { name: t('footer.faq'), href: "#" },
        { name: t('footer.privacy'), href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-content1/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-primary rounded-md"></div>
                <div className="h-8 w-8 bg-secondary rounded-md -ml-2"></div>
              </div>
              <p className="font-bold text-xl">
                <span className="text-primary">Pelitha</span>
                <span className="text-white">Tech</span>
              </p>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-content2/80 rounded-full hover:bg-content2">
                <Icon icon="logos:facebook" width={20} />
              </Link>
              <Link href="#" className="p-2 bg-content2/80 rounded-full hover:bg-content2">
                <Icon icon="logos:twitter" width={20} />
              </Link>
              <Link href="#" className="p-2 bg-content2/80 rounded-full hover:bg-content2">
                <Icon icon="logos:linkedin-icon" width={20} />
              </Link>
              <Link href="#" className="p-2 bg-content2/80 rounded-full hover:bg-content2">
                <Icon icon="logos:instagram-icon" width={20} />
              </Link>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/70 text-sm">
            &copy; {currentYear} PelithaTech. {t('footer.rights')}
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
              {t('footer.terms')}
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
              {t('footer.cookie')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};