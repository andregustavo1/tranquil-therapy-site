
const DifferentialsSection = () => {
  const differentials = [
    {
      title: "ECT Especializada",
      description: "Eletroconvulsoterapia realizada com equipamentos modernos e técnicas de última geração, proporcionando segurança e eficácia.",
      icon: "⚡️"
    },
    {
      title: "Estimulação Magnética",
      description: "Estimulação Magnética Transcraniana (EMT) para tratamento não-invasivo de depressão, ansiedade e outros transtornos mentais.",
      icon: "🧠"
    },
    {
      title: "Hipnose Ericksoniana",
      description: "Abordagem terapêutica que utiliza o estado de transe para acessar recursos internos e promover mudanças profundas e duradouras.",
      icon: "🌀"
    },
    {
      title: "Tratamento com Cetamina",
      description: "Terapia inovadora para casos de depressão resistente e outros transtornos mentais, com resultados rápidos e eficazes.",
      icon: "💊"
    }
  ];

  return (
    <section className="py-20 bg-igm-gray/30">
      <div className="section-container">
        <h2 className="section-title">Nossos Diferenciais Terapêuticos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-igm-navy/10 rounded-full mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-igm-navy mb-3">{item.title}</h3>
                <p className="text-igm-darkGray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
