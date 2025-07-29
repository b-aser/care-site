import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Car, 
  BrainCircuit, 
  Heart, 
  Activity,
  UserCheck,
  Calendar
} from 'lucide-react';
import servicesImage from '@/assets/services-image.jpg';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Daily Personal & Care Tasks",
      description: "Beyond assisting with daily tasks, we promote independent living, fostering learning and nurturing personal skills for a brighter, self-reliant future.",
      color: "bg-gradient-primary"
    },
    {
      icon: Users,
      title: "Community Participation & Social Activities",
      description: "Enhance social skills and nourish the soul. Foster healthy connections ensuring that everyone has the chance to be part of a diverse community.",
      color: "bg-gradient-secondary"
    },
    {
      icon: Car,
      title: "Transport & Travel Assistance",
      description: "Our services are structured to empower our participants, ensuring they can safely commute to work, social gatherings and healthcare appointments.",
      color: "bg-gradient-warm"
    },
    {
      icon: BrainCircuit,
      title: "Capacity Building & Life Skills",
      description: "Through targeted programs & learning, we assist participants in acquiring new skills, bolstering confidence and driving a sense of accomplishment.",
      color: "bg-gradient-primary"
    },
    {
      icon: UserCheck,
      title: "Employment Search Skills & Preparedness",
      description: "At Ubuntu Care Services, we recognise the value of employment in fostering independence and self-esteem for individuals with disabilities.",
      color: "bg-gradient-secondary"
    },
    {
      icon: Calendar,
      title: "Coordinating Life Stages, Transitions & Supports",
      description: "Providing comprehensive support and coordination for NDIS participants, ensuring a seamless integration of services tailored to each individual's needs.",
      color: "bg-gradient-warm"
    }
  ];

  const ageGroups = [
    { age: "0-6 years", description: "Early childhood support" },
    { age: "7-16 years", description: "Children and adolescents" },
    { age: "17-65 years", description: "Adults" },
    { age: "Over 65 years", description: "Seniors" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Ubuntu Care Services, we don't just provide supports and services; we offer avenues for 
            growth, exploration and realisation of individual potentials. Grounded in a deep respect for 
            the inherent worth of every person, our services are tailored to affirm and elevate the dignity 
            of our participants.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-card hover:-translate-y-3 transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm animate-fade-in`} style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                <Button variant="outline" className="border-primary/20 hover:border-primary text-primary hover:bg-primary/5 hover-scale transition-all duration-300">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Age Groups Section */}
        <div className="bg-card rounded-3xl p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Comprehensive support across all ages and abilities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ubuntu Care Services offers a broad spectrum of support to individuals across various 
                age groups. Our services are carefully tailored to address the unique needs of each 
                age category, ensuring that every individual receives the highest quality of care and support.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {ageGroups.map((group, index) => (
                  <div key={index} className={`text-center p-4 bg-muted/50 rounded-2xl hover:bg-muted/70 hover:scale-105 transition-all duration-300 animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="text-2xl font-bold text-primary mb-2">{group.age}</div>
                    <div className="text-sm text-muted-foreground">{group.description}</div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Explore our services
              </Button>
            </div>

            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Care services and support" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;