import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/language-context';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden tech-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute code-flow"
            style={{
              left: `${15 + i * 20}%`,
              height: '100%',
              width: '2px',
              opacity: 0.3,
              animationDelay: `${i * 0.5}s`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-content1/30 backdrop-blur-sm w-fit">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-medium">{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title').split('Life')[0]}
              <span className="gradient-text"></span>
              {t('hero.title').split('Life')[1]}
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                color="primary" 
                size="lg" 
                radius="full"
                className="font-medium px-8"
                endContent={<Icon icon="lucide:arrow-right" width={18} />}
              >
                {t('hero.cta.start')}
              </Button>
              
              <Button 
                variant="bordered" 
                size="lg" 
                radius="full"
                className="font-medium px-8"
                startContent={<Icon icon="lucide:play" width={18} />}
              >
                {t('hero.cta.watch')}
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src="../src/img/bg.png" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-foreground/70">{t('hero.trusted')} </span>
                <span className="font-semibold">{t('hero.clients')}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <div className="gradient-border p-1">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="../src/img/bg.png" 
                    alt="Website Dashboard" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-content1/30 backdrop-blur-md rounded-lg p-3 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-medium">Live Project</span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-1 w-1 rounded-full bg-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating code elements */}
            <motion.div
              className="absolute -top-10 -left-10 bg-content1/30 backdrop-blur-md p-3 rounded-lg border border-white/10 z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-xs font-mono">{'<code>'}</span>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 right-10 bg-content1/30 backdrop-blur-md p-3 rounded-lg border border-white/10 z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono">{'</code>'}</span>
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};