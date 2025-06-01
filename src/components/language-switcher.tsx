import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from '../context/language-context';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          size="sm"
          startContent={<Icon icon="lucide:globe" className="text-foreground" />}
          className="text-foreground"
        >
          {language === 'id' ? 'ID' : 'EN'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language Selection">
        <DropdownItem
          key="id"
          startContent={<Icon icon="lucide:check" className={language === 'id' ? 'opacity-100' : 'opacity-0'} />}
          onPress={() => setLanguage('id')}
        >
          {t('language.id')}
        </DropdownItem>
        <DropdownItem
          key="en"
          startContent={<Icon icon="lucide:check" className={language === 'en' ? 'opacity-100' : 'opacity-0'} />}
          onPress={() => setLanguage('en')}
        >
          {t('language.en')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};