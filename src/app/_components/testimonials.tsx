"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight  } from "lucide-react"
import tutor1 from '../../../public/tutor1.png';
import Image from "next/image";

const depoimentos = [
    {
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        author:"Fulano 1",
        role:" Alguma coisa medica",
        image: tutor1,
    },
    {
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        author:"Fulano 2",
        role:" Alguma coisa medica",
        image: tutor1,
    },
]

export function Depoimentos(){
    
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
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {depoimentos.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0  px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>
                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
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