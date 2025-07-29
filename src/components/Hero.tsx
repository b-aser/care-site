import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-tertiary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-secondary">Ubuntu</span>{' '}
              <span className="text-tertiary">Care Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At Ubuntu Care Services, we understand the profound impact that compassionate and 
              individualised support can have on the lives of those living with disabilities. 
              We don't merely offer services; we offer a philosophy rooted in connection, 
              mutual respect and recognition that our humanity is intertwined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-soft hover-scale transition-all duration-300"
              >
                Tell me more...
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-full hover-scale transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <span className="text-sm">Our motto:</span>
                <span className="font-semibold italic">"I am, because you are"</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative group">
              <img 
                src={heroImage} 
                alt="Ubuntu Care Services - Compassionate care and support" 
                className="w-full h-auto rounded-full shadow-glow transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-80 blur-sm animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tertiary rounded-full opacity-70 blur-sm animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;