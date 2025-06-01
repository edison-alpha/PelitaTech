import React from 'react';
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

interface CaseStudyProps {
  image: string;
  title: string;
  client: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  index: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ image, title, client, metrics, index }) => {
  return (
    <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
      <CardBody className="p-0 overflow-hidden">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent/30 flex flex-col justify-end p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-foreground/70 text-sm">Client: {client}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Icon icon={metric.icon} className="text-primary text-sm" />
              </div>
              <div>
                <p className="text-xs text-foreground/70">{metric.label}</p>
                <p className="font-semibold">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          color="primary" 
          variant="light" 
          radius="full"
          size="sm" 
          endContent={<Icon icon="lucide:arrow-right" width={14} />}
          className="w-full"
        >
          Read Case Study
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCaseStudies = 3;
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCaseStudies);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const caseStudies = [
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
      title: "E-commerce Redesign & Performance Optimization",
      client: "Fashion Retailer",
      metrics: [
        { label: "Traffic Increase", value: "+156%", icon: "lucide:trending-up" },
        { label: "Conversion Rate", value: "+83%", icon: "lucide:percent" },
        { label: "Page Load Speed", value: "-67%", icon: "lucide:timer" },
        { label: "Mobile Sales", value: "+112%", icon: "lucide:smartphone" }
      ]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
      title: "SaaS Platform Development",
      client: "Tech Startup",
      metrics: [
        { label: "User Acquisition", value: "+210%", icon: "lucide:users" },
        { label: "Retention Rate", value: "+45%", icon: "lucide:heart" },
        { label: "Feature Adoption", value: "+78%", icon: "lucide:zap" },
        { label: "Support Tickets", value: "-32%", icon: "lucide:help-circle" }
      ]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
      title: "Corporate Website Overhaul",
      client: "Financial Services",
      metrics: [
        { label: "Lead Generation", value: "+94%", icon: "lucide:mail" },
        { label: "Bounce Rate", value: "-58%", icon: "lucide:arrow-down" },
        { label: "Avg. Session", value: "+2.4m", icon: "lucide:clock" },
        { label: "SEO Rankings", value: "+23", icon: "lucide:search" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success <span className="gradient-text">Stories</span></h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            See how our web development solutions have helped businesses achieve remarkable results.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative h-full"
                      >
                        <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
                          <CardBody className="p-0 overflow-hidden">
                            <div className="relative">
                              <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-[400px] object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent/30 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                                <p className="text-foreground/70">Client: {study.client}</p>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                                  {study.metrics.map((metric, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                      <div className="p-3 bg-primary/20 rounded-full mb-3">
                                        <Icon icon={metric.icon} className="text-primary text-xl" />
                                      </div>
                                      <p className="text-2xl font-bold">{metric.value}</p>
                                      <p className="text-xs text-foreground/70">{metric.label}</p>
                                    </div>
                                  ))}
                                </div>
                                
                                <Button 
                                  color="primary" 
                                  variant="flat" 
                                  radius="full"
                                  className="mt-8 w-fit px-6"
                                  endContent={<Icon icon="lucide:arrow-right" width={16} />}
                                >
                                  Read Full Case Study
                                </Button>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                    
                    <div className="space-y-6">
                      {caseStudies.map((otherStudy, otherIndex) => {
                        if (otherIndex !== index) {
                          return (
                            <motion.div
                              key={otherIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: otherIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CaseStudy 
                                image={otherStudy.image}
                                title={otherStudy.title}
                                client={otherStudy.client}
                                metrics={otherStudy.metrics}
                                index={otherIndex}
                              />
                            </motion.div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-foreground/20"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};