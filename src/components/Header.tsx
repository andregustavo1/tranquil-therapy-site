
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Tratamentos', href: '#treatments' },
    { name: 'Processo', href: '#process' },
    { name: 'Equipe', href: '#team' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  const whatsappLink = "https://wa.me/5561992561988?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos";

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-4 md:px-8 py-3",
        scrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            {/* Logo placeholder - replace with actual logo */}
            <h1 className={cn(
              "font-display font-bold transition-colors duration-300",
              scrolled ? "text-igm-navy" : "text-white"
            )}>
              Instituto Gomes Monteiro
            </h1>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium transition-colors duration-300 hover:text-igm-lightBlue",
                scrolled ? "text-igm-darkGray" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Agende sua Consulta
        </a>
      </div>
    </header>
  );
};

export default Header;
