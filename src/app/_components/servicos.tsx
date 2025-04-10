"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Microscope, HeartPulse, HeartCrack, Salad, Hand, Clock, TestTubeDiagonal  } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

const servicos = [
    // Fisioterapia
    {
        title: "Fisioterapia",
        description: "Tratamentos especializados para reabilitação muscular e alívio de dores, melhorando a mobilidade e qualidade de vida do paciente.",
        duration: "Agende sua consulta",
        icon: <HeartCrack/>,
        linkText: "Gostaria de Mais informações sobre a consulta de fisioterapia"
    },
    
    // Exames laboratoriais
    {
        title: "Exames Laboratoriais",
        description: "Realizamos exames de alta precisão para diagnóstico médico, com resultados rápidos e confiáveis para seu acompanhamento de saúde.",
        duration: "Agende seu exame",
        icon: <TestTubeDiagonal/>,
        linkText: "Gostaria de mais informações sobre os exames laboratoriais"
    },
    
    // Dermatologia
    {
        title: "Dermatologia",
        description: "Cuidados com a pele, diagnóstico e tratamento de doenças dermatológicas, promovendo saúde e estética para todos os tipos de pele.",
        duration: "Agende sua consulta",
        icon: <Hand/>,
        linkText: "Gostaria de mais informações sobre consulta dermatológica"
    },
    
    // Cardiologia
    {
        title: "Cardiologia",
        description: "Consultas e exames especializados para prevenção, diagnóstico e tratamento de doenças cardíacas, visando melhorar a saúde do coração.",
        duration: "Agende sua consulta",
        icon: <HeartPulse/>,
        linkText: "Gostaria de mais informações sobre consulta cardiológica"
    },
    
    // Nutricionista
    {
        title: "Nutricionista",
        description: "Orientação nutricional para um estilo de vida saudável, visando melhorar a alimentação e o bem-estar através de dietas personalizadas.",
        duration: "Agende sua consulta",
        icon: <Salad/>,
        linkText: "Gostaria de mais informações sobre consulta nutricional"
      }
]

export function Servicos(){
    
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)" : { slidesToScroll: 3},
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    
    function scrollNext(){
        emblaApi?.scrollNext();
    }
    
    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {servicos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4"/>
                                                <span>{item.duration}</span>
                                            </div>
                                            <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações sobre ${item.title}`} target='_blank' className="flex items-center justify-center gap-2 hover:bg-linear-to-t from-sky-500 to-[#000080] px-4 py-1 rounded-md duration-300 text-white">
                                                <WhatsappLogo className="w-5 h-5"/>Agendar
                                            </a>
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
        </section>
    )
}