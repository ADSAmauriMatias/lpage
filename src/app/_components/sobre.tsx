import Image from "next/image";
import clinicaMessejanaC from '../../../public/clinica - Copia.png';
import portraitMedicoL from '../../../public/portraitMedicoL - Copia.png';
import { MapPin } from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';


export function Sobre(){
    return(
        <section id="sobre" className="bg-gradient-to-r from-[#29535b] to-[#3e858d] py-16 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={clinicaMessejanaC}
                            alt="aquario"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-105 duration-300" 
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg border-white overflow-y-hidden">
                            <Image
                            src={portraitMedicoL}
                            alt="aquario"
                            fill
                            quality={100}
                            priority 
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-white">Quem Somos</h2>
                        <p className="text-1xl text-white">
                            Bem-vindo à Clínica Centro de Saúde Messejana, oferecemos atendimento médico de excelência, com uma equipe qualificada e comprometida com o seu bem-estar. Contamos com um ambiente moderno e acolhedor, proporcionando cuidados especializados em diversas áreas, tanto medicas e não medicas. Nosso objetivo é oferecer um atendimento personalizado, focado na prevenção, diagnóstico e tratamento eficaz, garantindo a sua saúde e qualidade de vida.
                        </p>
                        <p className="text-1xl text-white">
                            Sabemos que saúde vai além do físico por isso, cuidamos de você de forma integral, com atenção ao corpo e à mente. Agende sua consulta e sinta a diferença de um cuidado completo.
                        </p>
                        {/* <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                            </li>
                        </ul> */}
                        <div className="flex gap-2">
                            <a href={`https://wa.me/5585991649714?text=Ola vim pelo site e gostaria de mais informações`} target='_blank' className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Saiba Mais
                            </a>
                            <a href="https://maps.app.goo.gl/AhtaqQZ8nh9bBLEz9" target='_blank' className="text-white flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md hover:bg-emerald-700 transition">
                                <MapPin className="w-5 h-5 text-white"/>
                                Localização
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}