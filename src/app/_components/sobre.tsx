import Image from "next/image";
import aquario from '../../../public/aquario.png';
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';


export function Sobre(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={aquario}
                            alt="aquario"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-105 duration-300" 
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg border-white overflow-y-hidden">
                            <Image
                            src={aquario}
                            alt="aquario"
                            fill
                            quality={100}
                            priority 
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>Infomation content:It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>Serviços Diversos
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>Serviços Diversos
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>Serviços Diversos
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações`} target='_blank' className="bg-linear-to-t from-sky-500 to-[#000080] text-white flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato
                            </a>
                            <a href="" className="text-black flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md">
                                <MapPin className="w-5 h-5 text-black"/>
                                Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}