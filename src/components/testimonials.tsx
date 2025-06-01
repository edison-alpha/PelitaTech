import React from 'react';
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, company, avatar, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
        <CardBody className="gap-4">
          <div className="flex justify-between items-start">
            <Avatar src={avatar} size="lg" />
            <Icon icon="lucide:quote" className="text-primary/30 text-4xl" />
          </div>
          
          <p className="text-foreground/80 text-sm italic">"{quote}"</p>
          
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-xs text-foreground/70">{position}, {company}</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "PelithaTech transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The increase in leads and conversions has been remarkable.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "GlobalTech Solutions",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
    },
    {
      quote: "Working with PelithaTech was a game-changer for our e-commerce business. Their attention to detail and technical expertise resulted in a seamless shopping experience that our customers love.",
      name: "Michael Chen",
      position: "CEO",
      company: "StyleHub",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
    },
    {
      quote: "The team at PelithaTech exceeded our expectations at every turn. They not only delivered a stunning website but also provided valuable insights that helped improve our overall digital strategy.",
      name: "Emma Rodriguez",
      position: "Operations Manager",
      company: "Innovate Financial",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
    },
    {
      quote: "PelithaTech's expertise in responsive design ensured our website performs flawlessly across all devices. The positive feedback from our mobile users has been overwhelming.",
      name: "David Park",
      position: "Product Owner",
      company: "TechNova",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4"
    },
    {
      quote: "From concept to execution, PelithaTech delivered excellence at every stage. Their commitment to quality and attention to detail is unmatched in the industry.",
      name: "Olivia Thompson",
      position: "Creative Director",
      company: "Artisan Studios",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5"
    },
    {
      quote: "The SEO optimization performed by PelithaTech dramatically improved our search rankings and organic traffic. Their holistic approach to web development sets them apart.",
      name: "James Wilson",
      position: "Digital Marketing Lead",
      company: "Growth Ventures",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=6"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              avatar={testimonial.avatar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};