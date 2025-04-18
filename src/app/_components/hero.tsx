import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import imgHero  from '../../../public/imgHero.png';
import  Image  from 'next/image';

const banner = [
    {
        imageBanner: imgHero,
        title: 'Clínica Central Saúde',
        descricao: 'Cuidando de você em cada detalhe! Consultas, exames e atendimentos especializados com qualidade e agilidade. Agende agora mesmo e viva com mais saúde! Se quiser algo mais formal, descontraído ou com foco em algum serviço, posso ajustar!',
        contato: 'Ola vim pelo site e gostaria de mais informações.',
    }
]

export function Hero() {
    return(
        // <section className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-white relative overflow-hidden">
        // <section className="bg-linear-to-t from-sky-500 to-indigo-500 text-white relative overflow-hidden">
    <section id="hero" className="bg-linear-to-t from-sky-500 to-[#000080] text-white relative overflow-hidden">
        {banner.map((item, index) => (
            <div key={index}>
                <div>
                    <Image
                        src={item.imageBanner}
                        alt='Medical'
                        fill
                        sizes="100vw"
                        priority
                        className='object-cover opacity-60 md:hidden'
                        // quality={100}
                    />
                    <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
                </div>
                <div className="container mx-auto pt-8 pb-16 md:pb-0 px-4 relative">
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                        <div>
                            <div  className="space-y-6 flex flex-col justify-center h-120">
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">{item.title}</h1>
                                <p className="lg:text-lg" data-aos="fade-right">{item.descricao}</p>
                                <a href={`https://wa.me/?text=${(item.contato)}`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                    <WhatsappLogo className='w-5 h-5' />
                                    Contato
                                </a>
                                <div className="mt-8">
                                    <p className="text-sm mb-4"><b className="bg-black text-white px-2 py-1 rounded-md">S</b>aiba aqui</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block h-120 relative">
                            <Image
                                src={item.imageBanner}
                                alt='Medical'
                                className='object-cover'
                                fill
                                sizes="(max-width: 768px) 0px, 60vw"
                                quality={100}
                                priority
                            />
                        </div>
                    </article>
                </div>
            </div>
            ))}
        </section>
    )
}
