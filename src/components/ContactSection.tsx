
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const whatsappLink = "https://wa.me/5561992561988?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos";
  const whatsappLink2 = "https://wa.me/5561991220540?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos";
  const emailLink = "mailto:contato@institutogomesmonteiro.com.br";
  const email2Link = "mailto:igm.sala27@gmail.com";
  const instagramLink = "https://instagram.com/institutogomesmonteiro";
  const mapUrl = "https://maps.google.com/?q=SGAN 607 Bloco A sala 203, Asa Norte, Brasília-DF";

  return (
    <section id="contact" className="py-20 bg-igm-gray/30">
      <div className="section-container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-igm-navy mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <Phone className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">WhatsApp (Terapias)</h4>
                    <p className="text-igm-darkGray">(61) 99256-1988</p>
                  </div>
                </a>
                
                <a 
                  href={whatsappLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <Phone className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">WhatsApp (Alternativo)</h4>
                    <p className="text-igm-darkGray">(61) 99122-0540</p>
                  </div>
                </a>
                
                <a 
                  href={emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <Mail className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">E-mail Principal</h4>
                    <p className="text-igm-darkGray">contato@institutogomesmonteiro.com.br</p>
                  </div>
                </a>
                
                <a 
                  href={email2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <Mail className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">E-mail Secundário</h4>
                    <p className="text-igm-darkGray">igm.sala27@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <MapPin className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">Endereço</h4>
                    <p className="text-igm-darkGray">SGAN 607 Bloco A sala 203, Asa Norte, Brasília-DF</p>
                  </div>
                </a>
                
                <a 
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-igm-gray/10 p-3 rounded-lg transition-colors duration-300"
                >
                  <Instagram className="h-6 w-6 text-igm-lightBlue mt-1" />
                  <div>
                    <h4 className="font-medium text-igm-navy group-hover:text-igm-lightBlue transition-colors duration-300">Instagram</h4>
                    <p className="text-igm-darkGray">@institutogomesmonteiro</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-96 md:h-full rounded-xl overflow-hidden shadow-lg animate-fade-in-left">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5460282755953!2d-47.9136723!3d-15.7706851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b18d8aaaaa7%3A0xf0a88d8dd71879eb!2sSGAN%20607%20-%20Asa%20Norte%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1sen!2sbr!4v1655341907154!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Instituto Gomes Monteiro location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
