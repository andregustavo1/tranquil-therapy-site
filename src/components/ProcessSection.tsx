
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Avaliação Inicial",
      description: "Consulta detalhada para compreender o histórico, sintomas e necessidades específicas do paciente."
    },
    {
      title: "Diagnóstico Personalizado",
      description: "Análise abrangente para identificar com precisão as condições e abordagens mais adequadas."
    },
    {
      title: "Plano de Tratamento",
      description: "Desenvolvimento de uma estratégia terapêutica individualizada, combinando diferentes técnicas quando necessário."
    },
    {
      title: "Acompanhamento Contínuo",
      description: "Monitoramento regular do progresso, com ajustes ao plano quando necessário para garantir os melhores resultados."
    }
  ];

  return (
    <section id="process" className="py-20 bg-igm-navy text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Nosso Processo Terapêutico</h2>
        
        <div className="mt-12 overflow-hidden">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-0 right-0 h-1 top-12 bg-igm-lightBlue/30"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-4 gap-4 relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="text-center px-4"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="relative flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Step number */}
                      <div 
                        className={cn(
                          "w-24 h-24 rounded-full flex items-center justify-center text-xl font-bold mb-4 transition-all duration-300 z-10",
                          activeStep === index 
                            ? "bg-igm-lightBlue text-white scale-110" 
                            : "bg-white/10 text-white"
                        )}
                      >
                        {index + 1}
                      </div>
                      
                      {/* Step content */}
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="w-16 h-16 rounded-full bg-igm-lightBlue text-white flex items-center justify-center text-xl font-bold flex-shrink-0"
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
