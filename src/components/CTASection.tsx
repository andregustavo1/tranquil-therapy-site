
const CTASection = () => {
  const whatsappLink = "https://wa.me/5561992561988?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos";

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A2463 0%, #247BA0 100%)"
      }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 animate-fade-in">
            Sua Saúde Mental Merece Cuidado Especializado
          </h2>
          
          <p className="text-white/90 text-lg mb-8 animate-fade-in-up">
            Dê o primeiro passo para o seu bem-estar. Nossa equipe está pronta para oferecer o suporte necessário no seu processo de recuperação.
          </p>
          
          <div className="animate-fade-in">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-igm-gray text-igm-navy font-semibold px-8 py-4 rounded-lg inline-block transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
