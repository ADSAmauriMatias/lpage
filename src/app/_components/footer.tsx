import liv from '../../../public/liv.png';
import mais from '../../../public/mais.png';
import unimed from '../../../public/unimed.png';
import bradesco from '../../../public/bradesco.webp';
import caixa from '../../../public/caixa.png';
import hapivida from '../../../public/hapivida.png';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

const brands = [
    {name: "liv", logo: liv},
    {name: "mais", logo: mais},
    {name: "unimed", logo: unimed},
    {name: "bradesco", logo: bradesco},
    {name: "caixa", logo: caixa},
    {name: "hapivida", logo: hapivida},
]

export function Footer(){
    return(
        <section id="footer" className='bg-white py-16 text-gray-400'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-gray-400/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Convênios</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index ) =>(
                            <div key={index} className='bg-[#1e293b] p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width:"auto",
                                        height:"auto",
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Clínica de Saúde</h3>
                        <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</p>
                        <a href={`https://wa.me/?text=Ola vim pelo site e gostaria de mais informações sobre consultas`} target='_blank' className='bg-green-500 px-4 text-white py-2 mt-4 rounded-md font-semibold flex items-center w-fit gap-2'>
                            <WhatsappLogo  className='w-5 h-5 '/>
                            Contato
                        </a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p className='mb-4'>Email: teste@teste.copm.br</p>
                        <p className='mb-4'>Telefone: (xx) 85 98888-8888</p>
                        <p className='mb-4'>Rua : teste, 124 teste /teste</p>
                    </div>
                    
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="" className='w-8 h-8'>
                                <FacebookLogo/>
                            </a>
                            <a href="" className='w-8 h-8'>
                                <InstagramLogo/>
                            </a>
                            <a href="" className='w-8 h-8'>
                                <YoutubeLogo/>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}