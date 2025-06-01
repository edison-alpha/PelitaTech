import React from 'react';
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-content1/50 backdrop-blur-md border-none">
        <CardBody className="flex flex-row items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon icon={icon} className="text-primary text-2xl" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-foreground/70 text-sm">{label}</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const stats = [
    {
      icon: "lucide:check-circle",
      value: "500+",
      label: "Projects Completed"
    },
    {
      icon: "lucide:users",
      value: "200+",
      label: "Satisfied Clients"
    },
    {
      icon: "lucide:award",
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: "lucide:star",
      value: "98%",
      label: "Client Satisfaction"
    }
  ];

  const clients = [
    { name: "Acme Inc", logo: "logos:airbnb" },
    { name: "Globex", logo: "logos:google" },
    { name: "Initech", logo: "logos:slack" },
    { name: "Umbrella", logo: "logos:spotify" },
    { name: "Massive Dynamic", logo: "logos:microsoft" },
    { name: "Stark Industries", logo: "logos:amazon" }
  ];

  // Duplicate clients for seamless looping

  return (
    <section id="about" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="gradient-text">Choose Us</span></h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            We combine technical expertise with creative excellence to deliver exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <Divider className="my-16" />
        
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">Trusted by Leading Companies</h3>
          <p className="text-foreground/70">
            We've worked with a diverse range of clients from startups to Fortune 500 companies.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Icon 
                icon={client.logo} 
                width={100} 
                height={40} 
                className="opacity-70 hover:opacity-100 transition-opacity" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};