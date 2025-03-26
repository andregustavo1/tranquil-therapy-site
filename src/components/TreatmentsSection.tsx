
const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Psiquiatria Ambulatorial",
      description: "Consultas e acompanhamento psiquiátrico com profissionais especializados, diagnóstico preciso e tratamento personalizado.",
      icon: "https://images.unsplash.com/photo-1576671414121-aa2d60f1e5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Terapia com Regressão",
      description: "Técnicas terapêuticas que permitem acessar memórias e experiências passadas para compreender e resolver questões emocionais presentes.",
      icon: "https://images.unsplash.com/photo-1551726661-9c929f254720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hipnose Terapêutica",
      description: "Utilização do estado de transe para acessar recursos do inconsciente e promover mudanças comportamentais e emocionais.",
      icon: "https://images.unsplash.com/photo-1633112546387-cc912d97ae11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tratamentos Intervencionistas",
      description: "Intervenções avançadas como Eletroconvulsoterapia e Estimulação Magnética Transcraniana para casos específicos.",
      icon: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Tratamentos Especializados</h2>
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row animate-fade-in ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-1/3 h-64 md:h-auto">
                <img 
                  src={treatment.icon} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-igm-navy mb-4">{treatment.title}</h3>
                <p className="text-igm-darkGray">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
