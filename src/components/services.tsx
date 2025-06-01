import React from 'react';
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/language-context';

interface ServiceCardProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descriptionKey, delay }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
        <CardBody className="gap-4">
          <div className="p-3 bg-primary/10 rounded-lg w-fit">
            <Icon icon={icon} className="text-primary text-2xl" />
          </div>
          
          <h3 className="text-xl font-semibold">{t(titleKey)}</h3>
          
          <p className="text-foreground/70 text-sm">
            {t(descriptionKey)}
          </p>
          
          <Button 
            color="primary" 
            variant="light" 
            radius="full" 
            endContent={<Icon icon="lucide:arrow-right" width={16} />}
            className="mt-2 w-fit px-4"
          >
            {t('services.learnMore')}
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: "lucide:globe",
      titleKey: "services.corporate.title",
      descriptionKey: "services.corporate.desc"
    },
    {
      icon: "lucide:shopping-bag",
      titleKey: "services.ecommerce.title",
      descriptionKey: "services.ecommerce.desc"
    },
    {
      icon: "lucide:layout-dashboard",
      titleKey: "services.webapps.title",
      descriptionKey: "services.webapps.desc"
    },
    {
      icon: "lucide:smartphone",
      titleKey: "services.responsive.title",
      descriptionKey: "services.responsive.desc"
    },
    {
      icon: "lucide:bar-chart",
      titleKey: "services.seo.title",
      descriptionKey: "services.seo.desc"
    },
    {
      icon: "lucide:settings",
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.desc"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title').split(' ')[0]} <span className="gradient-text">{t('services.title').split(' ')[1]}</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};