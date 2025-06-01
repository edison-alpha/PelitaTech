import React from 'react';
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLanguage } from '../context/language-context';

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  email: string;
  position: [number, number];
}

export const Maps: React.FC = () => {
  const { t } = useLanguage();
  const officeLocations: OfficeLocation[] = [
    {
      name: "PelithaTech Headquarters",
      address: "123 Tech Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@pelithatech.com",
      position: [37.7749, -122.4194]
    },
    {
      name: "PelithaTech New York",
      address: "456 Digital Avenue, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@pelithatech.com",
      position: [40.7128, -74.0060]
    },
    {
      name: "PelithaTech London",
      address: "789 Web Lane, London, UK SW1A 1AA",
      phone: "+44 20 1234 5678",
      email: "london@pelithatech.com",
      position: [51.5074, -0.1278]
    }
  ];

  const [selectedOffice, setSelectedOffice] = React.useState<OfficeLocation>(officeLocations[0]);

  return (
    <section id="maps" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('maps.title').split(' ')[0]} <span className="gradient-text">{t('maps.title').split(' ')[1]}</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            {t('maps.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {officeLocations.map((office, index) => (
                <Card 
                  key={index} 
                  className={`bg-content1/50 backdrop-blur-md border-none cursor-pointer transition-all hover:scale-[1.02] ${
                    selectedOffice.name === office.name ? 'border-l-4 border-primary' : ''
                  }`}
                  isPressable
                  onPress={() => setSelectedOffice(office)}
                  disableRipple
                >
                  <CardBody className="gap-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:map-pin" className="text-primary" />
                      <h3 className="font-semibold">{office.name}</h3>
                    </div>
                    <p className="text-sm text-foreground/70">{office.address}</p>
                  </CardBody>
                </Card>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="bg-content1/50 backdrop-blur-md border-none h-full">
              <CardHeader className="pb-0">
                <div>
                  <h3 className="text-xl font-semibold">{selectedOffice.name}</h3>
                  <p className="text-sm text-foreground/70">{selectedOffice.address}</p>
                </div>
              </CardHeader>
              <CardBody className="overflow-hidden">
                <div className="h-[400px] w-full rounded-lg overflow-hidden">
                  <MapContainer 
                    center={selectedOffice.position} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {officeLocations.map((office, index) => (
                      <Marker 
                        key={index} 
                        position={office.position}
                      >
                        <Popup>
                          <div className="p-2">
                            <h4 className="font-semibold">{office.name}</h4>
                            <p className="text-xs">{office.address}</p>
                            <p className="text-xs mt-1">
                              <span className="font-medium">Phone:</span> {office.phone}
                            </p>
                            <p className="text-xs">
                              <span className="font-medium">Email:</span> {office.email}
                            </p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon icon="lucide:phone" className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/70">{t('maps.phone')}</p>
                      <p className="font-medium">{selectedOffice.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon icon="lucide:mail" className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/70">{t('maps.email')}</p>
                      <p className="font-medium">{selectedOffice.email}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};