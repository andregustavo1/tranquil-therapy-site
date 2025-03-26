
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Tratamento transformador e humanizado. A equipe do Instituto Gomes Monteiro mudou minha vida com um atendimento personalizado e técnicas inovadoras.",
      author: "Maria S.",
      role: "Paciente de Hipnose Ericksoniana"
    },
    {
      quote: "Profissionais excepcionais e comprometidos. Depois de anos tentando diversos tratamentos, finalmente encontrei alívio para minha ansiedade.",
      author: "Carlos L.",
      role: "Paciente de Estimulação Magnética"
    },
    {
      quote: "Encontrei esperança e cura aqui. O tratamento com cetamina foi um divisor de águas para a minha depressão resistente. Gratidão eterna.",
      author: "Ana P.",
      role: "Paciente de Tratamento com Cetamina"
    },
    {
      quote: "Método único que realmente funciona. A abordagem integrada fez toda a diferença no meu processo de recuperação.",
      author: "Roberto M.",
      role: "Paciente de Psiquiatria Ambulatorial"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-igm-gray/30">
      <div className="section-container">
        <h2 className="section-title">O Que Nossos Pacientes Dizem</h2>
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out p-6 md:p-10 bg-white rounded-2xl shadow-lg",
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <div className="text-5xl text-igm-navy opacity-30 mb-4">"</div>
                <blockquote className="text-xl md:text-2xl text-igm-darkGray mb-6 font-display font-medium">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-2 h-12 bg-igm-lightBlue mr-4"></div>
                  <div>
                    <p className="font-semibold text-igm-navy">{testimonial.author}</p>
                    <p className="text-igm-darkGray/80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md hover:bg-igm-navy hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === current ? "bg-igm-navy scale-125" : "bg-igm-navy/30"
                  )}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md hover:bg-igm-navy hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
