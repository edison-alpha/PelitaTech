import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/language-context';

interface ContactInfoProps {
  icon: string;
  titleKey: string;
  value: string;
  delay: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, titleKey, value, delay }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <div className="p-3 bg-primary/10 rounded-full">
        <Icon icon={icon} className="text-primary text-xl" />
      </div>
      
      <div>
        <p className="text-sm text-foreground/70">{t(titleKey)}</p>
        <p className="font-medium">{value}</p>
      </div>
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: "lucide:mail",
      titleKey: "contact.info.email",
      value: "hello@pelithatech.com"
    },
    {
      icon: "lucide:phone",
      titleKey: "contact.info.phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: "lucide:map-pin",
      titleKey: "contact.info.address",
      value: "123 Tech Street, San Francisco, CA"
    }
  ];

  const socialMedia = [
    { icon: "logos:facebook", name: "Facebook" },
    { icon: "logos:twitter", name: "Twitter" },
    { icon: "logos:linkedin-icon", name: "LinkedIn" },
    { icon: "logos:instagram-icon", name: "Instagram" }
  ];

  return (
    <section id="contact" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title').split(' ')[0]} <span className="gradient-text">{t('contact.title').split(' ')[1]}</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
              <CardBody className="gap-6">
                <h3 className="text-2xl font-semibold">{t('contact.info.title')}</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <ContactInfo 
                      key={index}
                      icon={info.icon}
                      titleKey={info.titleKey}
                      value={info.value}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-foreground/70 mb-4">{t('contact.social')}</p>
                  <div className="flex gap-4">
                    {socialMedia.map((social, index) => (
                      <Tooltip key={index} content={social.name}>
                        <Button 
                          isIconOnly 
                          variant="flat" 
                          size="sm" 
                          radius="full"
                          className="bg-content3/50"
                        >
                          <Icon icon={social.icon} width={20} />
                        </Button>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
              <CardBody className="gap-6">
                <h3 className="text-2xl font-semibold">{t('contact.form.title')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label={t('contact.form.firstName')}
                    placeholder={t('contact.form.firstNamePlaceholder')}
                    variant="bordered" 
                    radius="sm"
                  />
                  <Input 
                    label={t('contact.form.lastName')}
                    placeholder={t('contact.form.lastNamePlaceholder')}
                    variant="bordered" 
                    radius="sm"
                  />
                </div>
                
                <Input 
                  label={t('contact.form.email')}
                  placeholder={t('contact.form.emailPlaceholder')}
                  type="email" 
                  variant="bordered" 
                  radius="sm"
                />
                
                <Input 
                  label={t('contact.form.subject')}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  variant="bordered" 
                  radius="sm"
                />
                
                <Textarea 
                  label={t('contact.form.message')}
                  placeholder={t('contact.form.messagePlaceholder')}
                  variant="bordered" 
                  radius="sm"
                  minRows={4}
                />
                
                <Button 
                  color="primary" 
                  size="lg" 
                  radius="full"
                  className="w-full font-medium"
                  endContent={<Icon icon="lucide:send" width={16} />}
                >
                  {t('contact.form.send')}
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};