"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HeaderTeste() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo Clínica" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#destaque" className="text-gray-700 hover:text-blue-600">Início</a>
          <a href="#oqueoferecemos" className="text-gray-700 hover:text-blue-600">O que oferecemos</a>
          <a href="#planos" className="text-gray-700 hover:text-blue-600">Planos</a>
          <a href="#nossosclientes" className="text-gray-700 hover:text-blue-600">Inspire-se</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
        </nav>

        {/* Ações */}
        <div className="hidden md:flex space-x-3">
          <Link href="https://app.seusite.com.br/login">
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">Entrar</button>
          </Link>
          <Link href="https://onboarding.seusite.com.br">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Cadastre-se</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          <a href="#destaque" className="block text-gray-700">Início</a>
          <a href="#oqueoferecemos" className="block text-gray-700">O que oferecemos</a>
          <a href="#planos" className="block text-gray-700">Planos</a>
          <a href="#nossosclientes" className="block text-gray-700">Inspire-se</a>
          <a href="#faq" className="block text-gray-700">FAQ</a>
          <div className="pt-2 border-t mt-2 flex flex-col gap-2">
            <Link href="https://app.seusite.com.br/login">
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Entrar</button>
            </Link>
            <Link href="https://onboarding.seusite.com.br">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Cadastre-se</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
