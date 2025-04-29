"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from '../../../public/LOGOC.png';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  //Para o button mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitorar o evento de rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Modifica o estado quando a página for rolada mais de 50px
      } else {
        setScrolled(false); // Volta ao estado inicial
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  


  const contato = {
    mensagem: 'Olá, vim pelo site e gostaria de mais informações.',
  };

  return (
    <header
      className={`bg-white transition-all duration-600 ease-in-out ${
        scrolled ? " shadow-md py-2" : "bg-transparent py-4"
      } ${menuOpen ? "animate-in fade-in slide-in-from-top" : "block"} fixed top-0 left-0 w-full z-50 `}
    >

      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#hero">
            <div className="flex items-center" data-aos="fade-down">
              <img
                src={logo.src}
                alt="Logo Principal do Site"
                className={`transition-all duration-300 ease-in-out ${
                  scrolled ? "h-10" : "h-12"
                }`}
              />
              <h2 className="hidden md:block text-base lg:text-2xl font-bold ml-4 text-gray-400">Centro de Saúde Messejana</h2>
            </div>
          </a>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link
                to="sobre"
                smooth={true}
                duration={0} 
                offset={-70}  
                spy={true}
                delay={0}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                Sobre
            </Link>
            <Link
                to="servicos"
                smooth={true}
                duration={0} 
                offset={-70}  
                spy={true}
                delay={0}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                Serviços
            </Link>
            <Link
                to="testimonials"
                smooth={true}
                duration={0} 
                offset={-70}  
                spy={true}
                delay={0}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                Depoimentos
            </Link>
            <Link
                to="especialidades"
                smooth={true}
                duration={0} 
                offset={-70}  
                spy={true}
                delay={0}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                Especialidades
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href={`https://wa.me/?text=${(contato.mensagem)}`} target='_blank'>
              <button className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-4 py-2 rounded-md ">
                Contato
              </button>
            </a>
          </div>
          {/* Botão de menu para mobile */}
          <div className="md:hidden">
                <button
                    className="text-gray-700"
                    aria-label="Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    )}
                </button>
            </div>
        </nav>
        {menuOpen && (
        <div
            className={`md:hidden flex flex-col px-4 space-y-4 text-gray-700 font-medium transition-all duration-800 ${
              menuOpen ? "animate-in fade-in slide-in-from-top" : "hidden"
            }`}
          >
            <hr className="h-px my-1 bg-blue-500 border-0 dark:bg-gray-700"></hr>
                <Link
                    to="sobre"
                    smooth={true}
                    duration={0} 
                    offset={-70}  
                    spy={true}
                    delay={0}
                    className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Sobre
                </Link>
                <Link
                    to="servicos"
                    smooth={true}
                    duration={0} 
                    offset={-70}  
                    spy={true}
                    delay={0}
                    className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Serviços
                </Link>
                <Link
                    to="testimonials"
                    smooth={true}
                    duration={0} 
                    offset={-70}  
                    spy={true}
                    delay={0}
                    className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Depoimentos
                </Link>
                <Link
                    to="especialidades"
                    smooth={true}
                    duration={0} 
                    offset={-70}  
                    spy={true}
                    delay={0}
                    className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Especialidades
                </Link>
            </div>
            )}
        </div>
    </header>
  );
};
