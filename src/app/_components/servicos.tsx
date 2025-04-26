"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Stethoscope , HeartCrack, Salad, Hand, Clock, TestTubeDiagonal, SmilePlus  } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import { BsLungs } from "react-icons/bs";
import { MdElderly } from "react-icons/md";
import { AiOutlineWoman } from "react-icons/ai";
import { GiBrain, GiHealthIncrease  } from "react-icons/gi";

const servicos = [
    // Fisioterapia
    {
        title: "Fisioterapia",
        description: "Oferecemos atendimento individualizado, com foco na prevenção, tratamento e reabilitação de disfunções físicas. Nossa equipe especializada utiliza técnicas atualizadas para promover alívio da dor, melhora funcional e qualidade de vida. Agende sua avaliação e confie seu cuidado a quem entende de movimento. ",
        duration: "Agende sua consulta",
        icon: <HeartCrack/>,
        linkText: "Gostaria de Mais informações sobre a consulta de fisioterapia"
    },
    
    // Exames laboratoriais
    {
        title: "Exames Laboratoriais",
        description: "Exames laboratoriais com precisão e cuidado Fundamentais para o diagnóstico e a prevenção, os exames laboratoriais ajudam a manter sua saúde em dia. Contamos com tecnologia moderna e uma equipe qualificada para garantir resultados confiáveis e atendimento de excelência. Agende seus exames e cuide-se com segurança.",
        duration: "Agende seu exame",
        icon: <TestTubeDiagonal/>,
        linkText: "Gostaria de mais informações sobre os exames laboratoriais"
    },
  
    // Geriatria
    {
        title: "Geriatria",
        description: "A Geriatria é a especialidade médica dedicada ao cuidado integral da pessoa idosa. Mais do que tratar doenças, o geriatra busca promover bem-estar, autonomia e envelhecimento saudável, com atenção às necessidades físicas, emocionais e sociais de cada paciente. O acompanhamento regular com um geriatra contribui para uma vida mais ativa, segura e com mais qualidade. Agende uma avaliação e descubra os benefícios desse cuidado especializado",
        duration: "Agende seu exame",
        icon: <MdElderly/>,
        linkText: "Gostaria de mais informações sobre caonsulta"
    },
    
    // Nutrição
    {
        title: "Nutrição",
        description: "O atendimento nutricional oferece um plano alimentar personalizado, ajudando na prevenção de doenças, no controle do peso e na melhoria da qualidade de vida. Com orientações práticas e individualizadas, você alcança mais equilíbrio e bem-estar. Agende sua consulta e cuide da sua saúde com o apoio de um nutricionista.",
        duration: "Agende seu exame",
        icon: <Salad/>,
        linkText: "Gostaria de mais informações sobre avaliação"
    },
    
    // Pneumologia 
    {
        title: "Pneumologia ",
        description: "O ferecemos um atendimento especializado para diagnosticar e tratar problemas respiratórios como tosse persistente, falta de ar e doenças como asma, bronquite e DPOC. Contamos com exames precisos e um atendimento personalizado para garantir sua saúde pulmonar. Agende sua consulta e respire com mais qualidade e conforto. Estamos aqui para cuidar de você.",
        duration: "Agende seu exame",
        icon: <BsLungs/>,
        linkText: "Gostaria de mais informações sobre consulta"
    },
    
    // Ginecologia  
    {
        title: "Ginecologia  ",
        description: "Nosso atendimento ginecológico oferece cuidados especializados para a saúde feminina em todas as fases da vida. Realizamos exames preventivos e tratamos condições como problemas menstruais, infecções e desequilíbrios hormonais. Agende sua consulta e receba o atendimento personalizado que você merece. Estamos aqui para cuidar de você.",
        duration: "Agende sua consulta",
        icon: <AiOutlineWoman/>,
        linkText: "Gostaria de mais informações sobre consulta"
    },
    
    // Psicólogo  
    {
        title: "Psicólogo  ",
        description: "Contamos com profissionais especializados em Psicologia para apoiar sua saúde mental e emocional. Oferecemos acompanhamento para lidar com questões como ansiedade, estresse, depressão, dificuldades de relacionamento e autoconhecimento. Agende sua consulta e receba o suporte necessário para melhorar sua qualidade de vida. Estamos aqui para ajudar você a se sentir melhor.",
        duration: "Agende sua consulta",
        icon: <GiBrain/>,
        linkText: "Gostaria de mais informações sobre consulta"
    },
    
    // Endocrinologia  
    {
        title: "Endocrinologia  ",
        description: "Nossa clínica oferece atendimento especializado em Endocrinologia, com foco no diagnóstico e tratamento de distúrbios hormonais. Contamos com profissionais qualificados para oferecer um cuidado personalizado, visando o equilíbrio do seu sistema endócrino e a melhoria da sua qualidade de vida. Agende sua consulta e receba o suporte que você merece.",
        duration: "Agende sua consulta",
        icon: <GiHealthIncrease/>,
        linkText: "Gostaria de mais informações sobre consulta"
    },
    
    // Clínico Geral  
    {
        title: "Clínico Geral  ",
        description: "Temos atendimento especializado em Clínica Geral, focando no diagnóstico, tratamento e prevenção de diversas condições de saúde. Com uma abordagem holística e personalizada, nossos profissionais estão preparados para avaliar seu estado de saúde e encaminhá-lo ao tratamento adequado, quando necessário. Agende sua consulta e tenha um cuidado completo para o seu bem-estar. Estamos aqui para cuidar de você.",
        duration: "Agende sua consulta",
        icon: <Stethoscope/>,
        linkText: "Gostaria de mais informações sobre consulta"
    },
    
    
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
        <section id="servicos"className="bg-white py-16">
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
                                            <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações sobre ${item.title}`} target='_blank' className="flex items-center justify-center gap-2 bg-[#1e293b] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
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