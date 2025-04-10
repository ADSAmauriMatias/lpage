"use client"
import useEmblaCarousel from "embla-carousel-react"
import { Target, Telescope, Gem  } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";
import tutor1 from '../../../public/tutor1.png';

const items = [
    { icon: <Target />, size: "w-6 h-6", color: "text-red-500" },
    { icon: <Telescope />, size: "w-8 h-8", color: "text-green-500" },
    { icon: <Telescope />, size: "w-8 h-8", color: "bg-ambar-500" },
  ];

const depoimentos = [
    {
        content: "Proporcionar cuidados médicos de excelência, com especialização e atendimento humanizado, visando o bem-estar e a qualidade de vida de nossos pacientes.",
        author:"Missão",
        role:" Missão",
        icon: <Target className="h-15 w-15"/>,
        image: tutor1,
        color: "#2ecc71"

    },
    {
        content: "Ser referência em saúde e bem-estar, oferecendo serviços médicos especializados com inovação, ética e compromisso com a saúde de nossos pacientes.",
        author:"Visão",
        role:"Visão",
        icon: <Telescope className="h-15 w-15"/>,
        image: tutor1,
        color: "#3498db"
    },
    {
        content: "Compromisso com a ética, excelência no atendimento, respeito ao paciente, inovação contínua e dedicação para garantir saúde e qualidade de vida.",
        author:"Valores",
        role:"Valores",
        icon: <Gem className="h-15 w-15"/>,
        image: tutor1,
        color: "#bdc3c7"
    },
]

export function MVV(){
    
    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
                <div className="relative  mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex">
                            {depoimentos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-full h-20 rounded-t-2xl"  style={{ backgroundColor: item.color }}>
                                                {/* <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-md"
                                                /> */}
                                                <span className="h-full flex items-center justify-center ">{item.icon }</span>
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>
                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}