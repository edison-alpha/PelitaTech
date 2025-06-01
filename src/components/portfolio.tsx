import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, description, technologies, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
        <CardBody className="p-0 overflow-hidden">
          <div className="relative group">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <Button 
                color="primary" 
                variant="flat" 
                radius="full"
                size="sm"
                endContent={<Icon icon="lucide:external-link" width={14} />}
              >
                View Project
              </Button>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-foreground/70 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, i) => (
              <Chip key={i} size="sm" variant="flat" color="primary" className="text-xs">
                {tech}
              </Chip>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      title: "Corporate Website",
      description: "Modern corporate website with custom animations and content management system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, filtering, and user accounts.",
      technologies: ["Vue.js", "Firebase", "Google Maps API"]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
      title: "Health & Fitness App",
      description: "Mobile-responsive web application for tracking fitness goals and nutrition.",
      technologies: ["React", "GraphQL", "AWS", "Chart.js"]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
      title: "Educational Platform",
      description: "Online learning platform with course management and video streaming.",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
      title: "Travel Booking System",
      description: "Comprehensive travel booking system with payment processing and user reviews.",
      technologies: ["React", "Express", "PostgreSQL", "Stripe"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Portfolio</span></h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            color="primary" 
            variant="bordered" 
            size="lg" 
            radius="full"
            endContent={<Icon icon="lucide:arrow-right" width={18} />}
            className="px-8"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};