import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import  ImagePet  from '../../../public/imgHero.png';
import  Image  from 'next/Image';

export function Hero() {
    return(
        // <section className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-white relative overflow-hidden">
        // <section className="bg-linear-to-t from-sky-500 to-indigo-500 text-white relative overflow-hidden">
        <section className="bg-linear-to-t from-sky-500 to-[#000080] text-white relative overflow-hidden">
            <div>
                <Image
                    src={ImagePet}
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
                        <div className="space-y-6 flex flex-col justify-center h-120">
                            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">Peixe é Pet</h1>
                            <p className="lg:text-lg" data-aos="fade-right">Saiba o poruqe  que peixe deve ser considerado como pet</p>
                            <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações`} target='_blank' data-aos="fade-up" data-aos-delay="300" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2">
                                <WhatsappLogo  className='w-5 h-5 '/>
                                Contato
                            </a>
                            <div className="mt-8">
                                <p className="text-sm mb-4"><b className="bg-black text-white px-2 py-1 rounded-md">S</b>aiba aqui</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block h-120 relative">
                        <Image
                            src={ImagePet}
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
        </section>
    )
}