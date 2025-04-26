import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import imgHero  from '../../../public/imgHero.png';
import  Image  from 'next/image';
import medicalHero from '../../../public/medicaHero.png';
import medicalHeroL from '../../../public/médicaHeroI.png';

const banner = [
    {
        imageBanner: imgHero,
        title: 'Clínica Centro de Saúde Messejana',
        descricao: 'Sua saúde, nossa missão e compromisso diário!',
        contato: 'Ola vim pelo site e gostaria de mais informações.',
    }
]

const banner2 = [
    {
        imageBanner: medicalHero,
        title: 'Clínica Centro de Saúde Messejana',
        descricao: 'Sua saúde, nossa missão e compromisso diário!',
        contato: 'Ola vim pelo site e gostaria de mais informações.',
    }
]
const banner3 = [
    {
        imageBanner: medicalHeroL,
        title: 'Clínica Centro de Saúde Messejana',
        descricao: 'Sua saúde, nossa missão e compromisso diário!',
        contato: 'Ola vim pelo site e gostaria de mais informações.',
    }
]

export function Hero() {
    return(
        // <section className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-white relative overflow-hidden">
        // <section className="bg-linear-to-t from-sky-500 to-indigo-500 text-white relative overflow-hidden">
        <>
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
                                className='object-cover opacity-60 md:hidden' />
                            <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
                        </div>
                        <div className="container mx-auto pt-8 pb-16 md:pb-0 px-4 relative">
                            <article className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div>
                                    <div className="space-y-6 flex flex-col justify-center h-120">
                                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">{item.title}</h1>
                                        <p className="lg:text-lg" data-aos="fade-right">{item.descricao}</p>
                                        <a href={`https://wa.me/?text=${(item.contato)}`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                            <WhatsappLogo className='w-5 h-5' />
                                            Contato
                                        </a>
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
                                        priority />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </section>
            <section id="hero" className="bg-linear-to-t from-sky-500 to-[#000080] text-white relative overflow-hidden">
                {banner2.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Image
                                src={item.imageBanner}
                                alt='Medical'
                                fill
                                sizes="100vw"
                                priority
                                className='object-cover opacity-60 md:hidden' />
                            <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
                        </div>
                        <div className="container mx-auto pt-8 pb-16 md:pb-0 px-4 relative">
                            <article className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div>
                                    <div className="space-y-6 flex flex-col justify-center h-120">
                                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">{item.title}</h1>
                                        <p className="lg:text-lg" data-aos="fade-right">{item.descricao}</p>
                                        <a href={`https://wa.me/?text=${(item.contato)}`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                            <WhatsappLogo className='w-5 h-5' />
                                            Contato
                                        </a>
                                    </div>
                                </div>

                                <div className="hidden md:block h-120 relative">
                                    <Image
                                        src={item.imageBanner}
                                        alt='Medical'
                                        className='object-contain'
                                        fill
                                        sizes="(max-width: 768px) 0px, 60vw"
                                        quality={100}
                                        priority />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </section>
            <section id="hero" className="bg-linear-to-t from-sky-500 to-[#000080] text-white relative overflow-hidden">
                {banner3.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Image
                                src={item.imageBanner}
                                alt='Medical'
                                fill
                                sizes="100vw"
                                priority
                                className='object-cover opacity-60 md:hidden' />
                            <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
                        </div>
                        <div className="container mx-auto pt-8 pb-16 md:pb-0 px-4 relative">
                            <article className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div>
                                    <div className="space-y-6 flex flex-col justify-center h-120">
                                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">{item.title}</h1>
                                        <p className="lg:text-lg" data-aos="fade-right">{item.descricao}</p>
                                        <a href={`https://wa.me/?text=${(item.contato)}`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                            <WhatsappLogo className='w-5 h-5' />
                                            Contato
                                        </a>
                                    </div>
                                </div>

                                <div className="hidden md:block h-120 relative">
                                    <Image
                                        src={item.imageBanner}
                                        alt='Medical'
                                        className='object-contain'
                                        fill
                                        sizes="(max-width: 768px) 0px, 60vw"
                                        quality={100}
                                        priority />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </section></>
    )
}
