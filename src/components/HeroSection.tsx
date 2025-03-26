
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5561992561988?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos";

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-igm-navy/40 to-igm-navy/80"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in-down">
            Cuidado Especializado em Saúde Mental
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up">
            Tratamentos Inovadores e Personalizados para sua recuperação e bem-estar
          </p>
          
          <div className="animate-fade-in">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary text-lg"
            >
              Agende sua Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
