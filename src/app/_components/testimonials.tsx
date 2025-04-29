"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight  } from "lucide-react"
import depoimentoMasculino1 from '../../../public/DepoimentoMasculino (1).png';
import depoimentoMasculino2 from '../../../public/DepoimentoMasculino (2).png';
import depoimentoMasculino3 from '../../../public/DepoimentoMasculino (3).png';
import depoimentoFeminino1 from '../../../public/DepoimentoFeminino (1).png';
import depoimentoFeminino2 from '../../../public/DepoimentoFeminino (2).png';
import depoimentoFeminino3 from '../../../public/DepoimentoFeminino (3).png';
import Image from "next/image";

const depoimentos = [
    {
        content: "Na clínica Centro de saúde Messejana, fui muito bem tratado. A equipe é altamente qualificada, sempre preocupada com o bem-estar do paciente. O ambiente é agradável e transmite confiança.  Com certeza recomendo para quem busca atendimento de qualidade",
        image: depoimentoMasculino1,
    },
    {
        content: "Tive uma ótima experiência na Clínica Centro de saúde Messejana. O atendimento foi de alta qualidade, com profissionais atenciosos e um ambiente muito acolhedor. Recomendo com confiança!",
        image: depoimentoFeminino1,
    },
    {
        content: "Na Clínica Central de Saúde, recebi um atendimento excepcional. Profissionais altamente qualificados, ambiente acolhedor e uma atenção personalizada que fizeram toda a diferença no meu tratamento",
        image: depoimentoFeminino2,
    },
    {
        content: "Fui muito bem atendido na Clínica Centro de saúde Messejana. Equipe atenciosa, estrutura excelente e cuidado com o paciente. Recomendo!",
        image: depoimentoMasculino2,
    },
    {
        content: "Fui atendido na Clínica Central de Saúde e fiquei impressionada com o cuidado e atenção que recebi. A equipe é super profissional, mas ao mesmo tempo muito acolhedora. Me senti à vontade e bem cuidado durante todo o atendimento. Super recomendo!",
        image: depoimentoFeminino3,
    },
    {
        content: "Me senti realmente cuidado na Clínica Central de Saúde. A atenção, o carinho e o respeito da equipe fizeram toda a diferença no meu atendimento.",
        image: depoimentoMasculino3,
    },
]

export function Depoimentos(){
    
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
        <section id="testimonials" className="bg-gradient-to-r from-[#3e858d] to-[#29535b] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">Depoimentos</h2>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {depoimentos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)] md:flex-[0_0_calc(100%/2)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt="Depoimentos"
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full" />
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>
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
                            className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}
                    >
                        <ChevronRight
                            className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    )
}