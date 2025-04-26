'use client';
import { useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import emailjs from '@emailjs/browser';

export function Contratos() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [formData, setFormData] = useState({
        empresa: '',
        cnpj: '',
        responsavel: '',
        telefone: '',
        email: '',
        funcionarios: ''
    });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.empresa) newErrors.empresa = 'Campo obrigatório';
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(formData.cnpj)) newErrors.cnpj = 'CNPJ inválido';
    if (!formData.responsavel) newErrors.responsavel = 'Campo obrigatório';
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) newErrors.telefone = 'Telefone inválido';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.funcionarios || isNaN(Number(formData.funcionarios))) newErrors.funcionarios = 'Digite um número válido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSending(true);

    emailjs
      .send(
        'service_6niptmc',
        'template_2ykbjqe',
        formData,
        'HAPRi7ElDbPxhr_vO'
      )
      .then(
        () => {
          alert('Formulário enviado com sucesso!');
          setFormData({
            empresa: '',
            cnpj: '',
            responsavel: '',
            telefone: '',
            email: '',
            funcionarios: ''
          });
          setErrors({});
        },
        (error) => {
          alert('Erro ao enviar o formulário. Tente novamente.');
          console.error(error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contratos" className="py-16 text-gray-800 bg-gradient-to-r from-[#29535b] to-[#3e858d]">
      <div className="container mx-auto px-4">
        <div className="pb-8 max-w-2xl mx-auto">
          <h4 className="text-4xl font-bold mb-6 text-center text-white" data-aos="fade-down">
            Parcerias Empresariais
          </h4>
          <p className="text-lg text-white mb-6 text-center">
            Ofereça mais qualidade de vida para seus colaboradores com condições exclusivas. Preencha o formulário abaixo e nossa equipe entrará em contato com sua empresa.
          </p>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Empresa */}
              <label className="text-sm font-medium">Nome da Empresa</label>
              <input
                name="empresa"
                type="text"
                value={formData.empresa}
                onChange={handleChange}
                className={`bg-white/80 border ${errors.empresa ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* CNPJ */}
              <label className="text-sm font-medium">CNPJ</label>
              <IMaskInput
                name="cnpj"
                mask="00.000.000/0000-00"
                value={formData.cnpj}
                onAccept={(value) => setFormData({ ...formData, cnpj: value })}
                className={`bg-white/80 border ${errors.cnpj ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* Responsável */}
              <label className="text-sm font-medium">Nome do Responsável pelo Contato</label>
              <input
                name="responsavel"
                type="text"
                value={formData.responsavel}
                onChange={handleChange}
                className={`bg-white/80 border ${errors.responsavel ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* Telefone */}
              <label className="text-sm font-medium">Telefone / WhatsApp</label>
              <IMaskInput
                name="telefone"
                mask="(00) 00000-0000"
                value={formData.telefone}
                onAccept={(value) => setFormData({ ...formData, telefone: value })}
                className={`bg-white/80 border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* E-mail */}
              <label className="text-sm font-medium">E-mail</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white/80 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* Funcionários */}
              <label className="text-sm font-medium">Média de Funcionários</label>
              <input
                name="funcionarios"
                type="number"
                value={formData.funcionarios}
                onChange={handleChange}
                className={`bg-white/80 border ${errors.funcionarios ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 transition`}
              />

              {/* Botão */}
              <button
                type="submit"
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md transition disabled:opacity-50"
                disabled={isSending}
                >
                {isSending ? 'Enviando...' : 'Enviar'}
                </button>

              {/* Erros */}
              {Object.keys(errors).length > 0 && (
                <div className="text-red-500 text-sm mt-2">
                  Corrija os campos destacados para continuar.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
