import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, Clock, Users } from 'lucide-react';
import teamImage from '@/assets/team-image.jpg';

const Team = () => {
  const stats = [
    {
      icon: Clock,
      value: "10+",
      label: "Years Experience",
      description: "Combined decades in disability and aged care"
    },
    {
      icon: Users,
      value: "500+",
      label: "Lives Touched",
      description: "Participants supported across all age groups"
    },
    {
      icon: Award,
      value: "100%",
      label: "Dedication",
      description: "Unwavering commitment to excellence"
    },
    {
      icon: Star,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us most"
    }
  ];

  const whyChooseUs = [
    {
      title: "Rights",
      description: "We fiercely champion the individual rights of every participant, ensuring safety, dignity and respect in every interaction."
    },
    {
      title: "Innovation and Integration",
      description: "Embracing modern techniques and technologies, we ensure our participants receive care that's both effective and innovative."
    },
    {
      title: "Relationship-focused Care",
      description: "At the heart of our service lies genuine compassion and understanding, building lasting relationships of trust and respect."
    },
    {
      title: "Cultural and Linguistic Competence",
      description: "We celebrate diversity, respecting and catering to varied cultural backgrounds and language preferences."
    },
    {
      title: "Participation and Inclusion",
      description: "Inclusion is not just a policy; it's a promise we follow through, creating opportunities for meaningful social participation."
    },
    {
      title: "Choice and Control",
      description: "We prioritise giving our participants a voice, actively involving them in decisions that influence their care journey."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Team Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our experienced team, with their extensive backgrounds spanning health, disability, 
              and social sectors, form the backbone of Ubuntu Care Services. From professionals 
              with over a decade of experience in disability and aged care to those who have 
              passionately contributed to various facets of care, our team's dedication is unwavering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Their combined experience ensures that we remain at the forefront of care, always 
              empathetic, always understanding and always striving for the best.
            </p>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Meet Our Team
            </Button>
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="Our dedicated team of care professionals" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className={`text-center border-0 bg-gradient-primary shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-500 animate-fade-in group`} style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-125 group-hover:bg-primary-foreground/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-primary-foreground font-semibold mb-2">{stat.label}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why choose Ubuntu Care Services?
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Ubuntu, we believe in a world where everyone is free to express, decide, and determine 
            their path. We take active steps to ensure every interaction upholds our core values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className={`group hover:shadow-card hover:-translate-y-2 transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-fade-in`} style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;