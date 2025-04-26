'use client';
import geriatria from '../../../public/geriatria.jpg';
import fisioterapia from '../../../public/fisioterapia.jpg';
import nutricionista from '../../../public/nutricionista.jpg';
import pneumologia from '../../../public/pneumologista.jpeg';
import endocrinologia from '../../../public/endrocnologista.jpg';
import clinico_geral from '../../../public/clinico.jpg';
import exame_laboratorial from '../../../public/exames.jpg';
import psicologo from '../../../public/psicologia.jpg';
import ginecologista from '../../../public/ginecologista.jpeg';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from 'lucide-react';

const depoimentos = [
    {
        especialidade:"Geriatria",
        image: geriatria,
    },
    {
        especialidade:"Fisioterapia",
        image: fisioterapia,
    },
    {
        especialidade:"Nutricionista",
        image: nutricionista,
    },
    {
        especialidade:"Pneumologia",
        image: pneumologia,
    },
    {
        especialidade:"Endocrinologia",
        image: endocrinologia,
    },
    {
        especialidade:"Clínico geral",
        image: clinico_geral,
    },
    {
        especialidade:"Exame laboratorial",
        image: exame_laboratorial,
    },
    {
        especialidade:"Psicólogo",
        image: psicologo,
    },
    {
        especialidade:"Ginecologista",
        image: ginecologista,
    },
]

export function Especialidades() {

   const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    
    function scrollNext(){
        emblaApi?.scrollNext();
    }


    return(
        <section id="especialidades" className='bg-white py-16 text-gray-400'>
            <div className='container mx-auto px-4'>
                <div className='pb-8'>
                    <h4 className='text-4xl font-bold mb-12' data-aos="fade-down">Especialidades</h4>
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                            {depoimentos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(80%/4)] md:flex-[0_0_calc(100%/3)] px-6" >
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col" data-aos="fade-up" data-aos-delay="300">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <Image
                                                src={item.image}
                                                alt={item.especialidade}
                                                width={200}
                                                height={50}
                                                quality={100}
                                                className='object-contain rounded-2xl'
                                            />
                                            <p className="font-bold">{item.especialidade}</p>
                                        </div>
                                    </article>
                                </div>
                                ))}
                            </div>
                        </div>
                        <button 
                            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                            onClick={scrollPrev} 
                        >
                            <ChevronLeft
                                className="w-6 h-6 text-gray-600"
                            />
                        </button>
                        <button 
                            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                            onClick={scrollNext} 
                        >
                            <ChevronRight
                                className="w-6 h-6 text-gray-600"
                            />
                        </button>
                    </div>
                </div>
            </div>            
        </section>
    )
}