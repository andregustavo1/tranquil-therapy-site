
const TeamSection = () => {
  const team = [
    {
      name: "Jorge Monteiro",
      title: "Hipnoterapeuta e Coach",
      photo: "/images/image.png",
      highlights: [
        "Mestre em Liderança e Operações Militares",
        "Trainer de Hipnose Ericksoniana",
        "Especialista em Coaching e Análise Comportamental"
      ],
      specialties: [
        "Transe Conversacional",
        "Terapia de Regressão",
        "Tratamento de Ansiedade e Depressão"
      ]
    },
    {
      name: "Sílvia Gomes Monteiro",
      title: "Médica Psiquiatra",
      photo: "/images/image copy.png",
      highlights: [
        "Residência em Saúde Pública",
        "Especialista em Medicina do Tráfego",
        "Hipnoterapeuta certificada"
      ],
      specialties: [
        "Tratamento de Transtornos de Ansiedade",
        "Terapia de Regressão",
        "Tratamento de Dores Crônicas"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Nossa Equipe de Especialistas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ${member.name === "Jorge Monteiro" ? "object-top" : "object-center"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-igm-navy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-igm-lightBlue font-medium">{member.title}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-igm-navy mb-2">Destaques</h4>
                  <ul className="space-y-1">
                    {member.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-igm-darkGray">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-igm-navy mb-2">Especialidades</h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <li key={idx} className="text-igm-darkGray">{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
