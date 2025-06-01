import React from 'react';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '../context/language-context';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroNavbar 
      maxWidth="xl" 
      position="sticky" 
      className={`transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <NavbarBrand>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="flex items-center">
            <div className="h-8 w-8 bg-primary rounded-md"></div>
            <div className="h-8 w-8 bg-secondary rounded-md -ml-2"></div>
          </div>
          <p className="font-bold text-xl">
            <span className="text-primary">Pelitha</span>
            <span className="text-white">Tech</span>
          </p>
        </motion.div>
      </NavbarBrand>
      
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about" className="text-sm font-medium">
            {t('nav.about')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services" className="text-sm font-medium">
            {t('nav.services')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#portfolio" className="text-sm font-medium">
            {t('nav.portfolio')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#maps" className="text-sm font-medium">
            {t('nav.maps')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#pricing" className="text-sm font-medium">
            {t('nav.pricing')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#careers" className="text-sm font-medium">
            {t('nav.careers')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#contact" 
            variant="flat" 
            radius="full"
            className="font-medium"
          >
            {t('nav.contact')}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};