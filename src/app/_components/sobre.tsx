import Image from "next/image";
import clinica from '../../../public/clinica.jpg';
import medico from '../../../public/medico.jpg';
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';


export function Sobre(){
    return(
        <section id="sobre" className="bg-blue-100 py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={clinica}
                            alt="aquario"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-105 duration-300" 
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg border-white overflow-y-hidden">
                            <Image
                            src={medico}
                            alt="aquario"
                            fill
                            quality={100}
                            priority 
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold">Bem-vindo à Clínica Centro de Saúde Messejana</h2>
                        <p>
                            Na Clínica Centro de Saúde Messejana, oferecemos atendimento médico de excelência, com uma equipe qualificada e comprometida com o seu bem-estar. Contamos com um ambiente moderno e acolhedor, proporcionando cuidados especializados em diversas áreas, tanto medicas e não medicas. Nosso objetivo é oferecer um atendimento personalizado, focado na prevenção, diagnóstico e tratamento eficaz, garantindo a sua saúde e qualidade de vida.
                        </p>
                        <p>
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
                            <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações`} target='_blank' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Saiba Mais
                            </a>
                            <a href="https://maps.app.goo.gl/K2W7d1CPdXPTmqN57" target='_blank' className="text-black flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md">
                                <MapPin className="w-5 h-5 text-black"/>
                                Localização
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}