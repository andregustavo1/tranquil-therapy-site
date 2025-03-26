
import { Check } from 'lucide-react';

const AboutSection = () => {
  const differentials = [
    {
      title: "Tratamentos Avançados",
      description: "Tecnologias e métodos terapêuticos inovadores para resultados eficazes."
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais com ampla experiência e formação específica em saúde mental."
    },
    {
      title: "Abordagem Humanizada",
      description: "Cuidado personalizado com foco nas necessidades individuais de cada paciente."
    },
    {
      title: "Tecnologias Inovadoras",
      description: "Utilizamos as mais avançadas técnicas disponíveis para tratamentos eficientes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-igm-navy mb-6">
              Expertise em Saúde Mental
            </h2>
            
            <p className="text-igm-darkGray mb-8 leading-relaxed">
              O Instituto Gomes Monteiro é referência em tratamentos psiquiátricos avançados, oferecendo soluções inovadoras e personalizadas para saúde mental. Nossa abordagem integra conhecimento científico, tecnologia de ponta e cuidado humanizado.
            </p>
            
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-igm-lightBlue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-igm-navy">{item.title}</h3>
                    <p className="text-igm-darkGray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Consultório do Instituto Gomes Monteiro" 
                className="rounded-lg shadow-2xl object-cover h-full w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-igm-navy p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-medium">Ambiente acolhedor e profissional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
