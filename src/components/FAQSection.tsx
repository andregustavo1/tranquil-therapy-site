
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é Hipnose Ericksoniana?",
      answer: "A Hipnose Ericksoniana é uma abordagem terapêutica desenvolvida por Milton Erickson que utiliza sugestões indiretas, metáforas e histórias terapêuticas para induzir um estado de transe natural. Diferente da hipnose clássica, ela é mais conversacional e adaptada às necessidades específicas de cada pessoa, permitindo acessar recursos internos para promover mudanças positivas."
    },
    {
      question: "Quais tratamentos o Instituto oferece?",
      answer: "O Instituto Gomes Monteiro oferece uma variedade de tratamentos especializados em saúde mental, incluindo Eletroconvulsoterapia (ECT), Estimulação Magnética Transcraniana (EMT), tratamento com cetamina, hipnose ericksoniana, psiquiatria ambulatorial, terapia com regressão e outras abordagens personalizadas conforme a necessidade de cada paciente."
    },
    {
      question: "Como funciona a Estimulação Magnética Transcraniana?",
      answer: "A Estimulação Magnética Transcraniana (EMT) é um procedimento não-invasivo que utiliza campos magnéticos para estimular áreas específicas do cérebro. Durante o procedimento, uma bobina é posicionada contra o couro cabeludo, gerando pulsos magnéticos indolores que penetram no crânio e estimulam os neurônios. É indicada para tratamento de depressão resistente a medicamentos, transtornos de ansiedade e outras condições."
    },
    {
      question: "Quanto tempo dura um tratamento?",
      answer: "A duração do tratamento varia de acordo com a abordagem utilizada e as necessidades específicas de cada paciente. Sessões de psicoterapia e hipnose geralmente duram entre 50 minutos e 1 hora. Tratamentos como EMT podem exigir várias sessões ao longo de semanas. Durante a avaliação inicial, desenvolvemos um plano terapêutico personalizado com cronograma detalhado."
    },
    {
      question: "Os tratamentos são seguros?",
      answer: "Sim, todos os tratamentos oferecidos pelo Instituto Gomes Monteiro seguem rigorosos protocolos de segurança e são realizados por profissionais altamente qualificados. Procedimentos como ECT, EMT e tratamento com cetamina são realizados com equipamentos modernos e técnicas atualizadas. Antes de iniciar qualquer intervenção, realizamos uma avaliação detalhada para garantir que o tratamento seja adequado e seguro para cada caso."
    },
    {
      question: "Posso fazer tratamento online?",
      answer: "Sim, oferecemos atendimento online para algumas modalidades terapêuticas, como consultas psiquiátricas de acompanhamento e sessões de psicoterapia, incluindo hipnose. No entanto, tratamentos como ECT, EMT e aplicação de cetamina necessitam ser realizados presencialmente em nossa clínica. Durante a avaliação inicial, discutimos as opções disponíveis para cada caso específico."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Dúvidas Frequentes</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border-b border-igm-gray/50 overflow-hidden transition-all duration-300 animate-fade-in",
                index === 0 && "border-t"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-igm-navy">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-igm-lightBlue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-igm-lightBlue" />
                )}
              </button>
              
              <div 
                className={cn(
                  "px-4 transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-igm-darkGray">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
