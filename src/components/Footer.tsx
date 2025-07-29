import { Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const locations = [
    'New South Wales',
    'Queensland', 
    'Western Australia'
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ubuntu Care Services</h3>
                <p className="text-sm text-background/70">Your Local NDIS Provider</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              At Ubuntu Care Services, we understand the profound impact that compassionate and 
              individualised support can have on the lives of those living with disabilities.
            </p>
            <div className="flex items-center space-x-2 text-background/70">
              <Heart className="w-4 h-4" />
              <span className="text-sm italic">"I am, because you are"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <span className="text-background/80">{location}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-background/80 text-sm mb-2">Connect With Us</p>
              <p className="text-secondary font-semibold">1300 292 274</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Ubuntu Care Services. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Bringing Humanity Back into Care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;