import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Lightbulb } from 'lucide-react';

const Philosophy = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Genuine care and understanding in every interaction, building lasting relationships based on trust and respect."
    },
    {
      icon: Users,
      title: "Connection",
      description: "Recognizing that our humanity is intertwined, fostering meaningful relationships within our community."
    },
    {
      icon: Shield,
      title: "Dignity",
      description: "Upholding the inherent worth of every individual, ensuring safety, respect, and empowerment in all we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern techniques and technologies to provide the most effective and forward-thinking care."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Ubuntu Philosophy & Mindset
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our identity and ethos are deeply embedded in the Ubuntu philosophy – a powerful assertion 
            that one's humanity is achieved and recognized through and with others. This philosophy 
            encapsulates the essence of interconnectedness, mutual respect, compassion, and dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className={`group hover:shadow-card hover:-translate-y-2 transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <value.icon className="w-8 h-8 text-primary-foreground transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-soft animate-fade-in hover:shadow-glow transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6 animate-fade-in delay-1000">
            "Bringing Humanity Back into Care"
          </h3>
          <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in delay-1200">
            At Ubuntu Care Services, we strive daily to integrate this understanding of shared human 
            experience into the care we offer. The responsibility and pride we carry for our participants 
            guide our every action, ensuring that every day we come closer to achieving excellence in care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;