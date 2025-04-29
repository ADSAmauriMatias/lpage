"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo, ArrowUp } from '@phosphor-icons/react/dist/ssr';
import { MapPin } from "lucide-react";

export function Footer(){

const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <section id="footer" className='py-16 text-gray-400'>
            <div className='container mx-auto px-4'>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md-12 mt-5'>
                    <div data-aos="fade-right" data-aos-delay="300">
                        <h3 className='text-2xl font-semibold mb-2'>Clínica Centro de Saúde Messejana</h3>
                        <p className='mb-4 font'>Na Clínica Centro de Saúde Messejana, oferecemos atendimento médico de excelência, com uma equipe qualificada e comprometida com o seu bem-estar</p>
                        <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações sobre consultas`} target='_blank' className='bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 mt-4 rounded-md font-semibold flex items-center w-fit gap-2'>
                            <WhatsappLogo  className='w-5 h-5 '/>
                            Contato
                        </a>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p className='mb-4'><b>Endereço:</b> Rua Tenente Jurandir Alencar - N 3 - CEP 60840 - 000</p>
                        <p className='mb-4'><b>Email:</b> centrodesaudemessejana@gmail.com</p>
                        <p className='mb-4'><b>Telefone:</b> (85) 99164-9714</p>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300">
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="https://www.facebook.com/share/12JMfBNhfZw/?mibextid=wwXIfr" target='_blank' className='w-10 h-10' style={{ fontSize: 25 }}>
                                <FacebookLogo />
                            </a>
                            <a href="https://www.instagram.com/centrodesaudemessejana?igsh=MXJ6azN3MjVqdTV5bQ==" target='_blank' className='w-10 h-10' style={{ fontSize: 25 }}>
                                <InstagramLogo/>
                            </a>
                            <a href="https://maps.app.goo.gl/AhtaqQZ8nh9bBLEz9" target='_blank' className='w-10 h-10' style={{ fontSize: 25 }}>
                                <MapPin/>
                            </a>
                        </div>
                    </div>
                    {showButton && (
                        <a 
                            href="#hero" 
                            className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
                            aria-label="Voltar ao topo"
                        >
                            <ArrowUp size={24} weight="bold" />
                        </a>
                        )}
                </footer>
            </div>
        </section>
    )
}


