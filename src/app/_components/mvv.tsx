"use client"
import useEmblaCarousel from "embla-carousel-react"
import { Target, Telescope, Gem  } from "lucide-react"
import { ChevronLeft, ChevronRight  } from "lucide-react"

const items = [
    { icon: <Target />, size: "w-6 h-6", color: "text-red-500" },
    { icon: <Telescope />, size: "w-8 h-8", color: "text-green-500" },
    { icon: <Telescope />, size: "w-8 h-8", color: "bg-ambar-500" },
  ];

const depoimentos = [
    {
        content: "Ser referência em atendimento, promovendo uma assistencia acolhedora e de excelência, visando o cuidado integral à saúde física e emocional do paciente. Buscando sempre oferecer um serviço acessível, ético e de qualidade. Contamos com uma equipe comprometida e empática, sempre pautada no respeito, na responsabilidade social e na valorização da vida. A Clínica Centro de Saúde Messejana tem como foco primordial a saúde do corpo e da mente, proporcionando um cuidado pleno, integrado e eficaz para o bem-estar dos nossos pacientes. ",
        icon: <Target className="h-15 w-15"/>,
        color: "#2ecc71"

    },
    {
        content: "Nosso proposito objetiva um cuidado que vá além do tratamento técnico, valorizamos a escuta, o respeito e o comprometimento. Atuamos com uma equipe ética, dedicada e sensível ao bem-estar humano, alem de extremamente competente. Buscamos transformar vidas por meio de um atendimento acessível, empático e resolutivo. Acreditamos fielmente que tratar bem é também um ato de amor, e que exercer o bem ao próximo é a base da nossa missão.",
        icon: <Telescope className="h-15 w-15"/>,
        color: "#3498db"
    },
    {
        content: "Confiamos em um atendimento atencioso, eficiente e respeitoso, colocando sempre o paciente no centro do cuidado. Nossa conduta é guiada pela ética, empatia e responsabilidade com a comunidade. Contamos com profissionais comprometidos, que trabalham com dedicação e sensibilidade. Para nós, cuidar vai além do tratamento. É acolher com carinho, escutar com atenção e servir com propósito.",
        icon: <Gem className="h-15 w-15"/>,
        color: "#bdc3c7"
    },
]

export function MVV(){    
        
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
        <section id="mvv"className="bg-gradient-to-r from-[#3e858d] to-[#29535b] py-16 text-white  relative overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold  mb-12" data-aos="fade-down">Missão, Visão e Valores</h2>
                <div className="relative  mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {depoimentos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3" data-aos="fade-up" data-aos-delay="300">
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
                                            <p className="text-gray-200 m-4 text-justify">{item.content}</p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 md:hidden"
                        onClick={scrollPrev} 
                     >
                        <ChevronLeft
                            className="w-6 h-6 text-gray-600"
                        />
                    </button>
                    <button 
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 md:hidden"
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