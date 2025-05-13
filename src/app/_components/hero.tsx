import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import  Image  from 'next/image';
import medicalHeroCross from '../../../public/imgHerocross.png';


const banner = [
    {
        imageBanner: medicalHeroCross,
        title: 'Clínica Centro de Saúde Messejana',
        descricao: 'Sua vida em primeiro lugar: saúde, cuidado e compromisso que transformam. Sua saúde, nossa missão e compromisso diário.',
        contato: 'Ola vim pelo site e gostaria de mais informações.',
    }
]

export function Hero() {
    return(
    <section id="hero" className="bg-gradient-to-r from-[#3e858d] to-[#29535b] text-white relative overflow-hidden">
        {banner.map((item, index) => (
            <div key={index}>
                <div>
                    <Image
                        src={item.imageBanner}
                        alt='Medical'
                        fill
                        sizes="100vw"
                        priority
                        className='object-cover opacity-60 lg:hidden'
                        // quality={100}
                    />
                    <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
                </div>
                <div className="container mx-auto pt-8 pb-16 md:pb-0 px-4 relative">
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div  className="space-y-6 flex flex-col justify-center h-120">
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">{item.title}</h1>
                                <p className="lg:text-2xl" data-aos="fade-right">{item.descricao}</p>
                                <a href={`https://wa.me/5585991649714?text=${(item.contato)}`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-emerald-600 hover:bg-emerald-700 text-white transition px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                    <WhatsappLogo className='w-5 h-5' />
                                    Saiba Mais
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block h-120 relative" data-aos="fade-left" data-aos-delay="300">
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
