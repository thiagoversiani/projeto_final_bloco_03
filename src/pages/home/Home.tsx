import React from 'react';
import { Link } from 'react-router-dom';
 
const Home: React.FC = () => {
  return (
<main className="flex-1 bg-[#d1f1f9] flex items-center justify-center py-12 px-6">
<div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8">
        {/* Lado Esquerdo: Mensagem e Botão */}
<div className="flex flex-col items-start gap-3">
<h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Seja bem vinde!
</h1>
<p className="text-slate-800 text-base font-semibold">
            Aqui você encontra Medicamentos e Cosméticos!
</p>
<div className="mt-2">
<Link
              to="/cadastrarproduto"
              className="bg-[#2d2e83] hover:bg-[#212263] text-white font-medium text-sm px-6 py-2.5 rounded-md shadow transition-colors inline-block"
>
              Cadastrar Produto
</Link>
</div>
</div>
 
        {/* Lado Direito: Imagem Ilustrativa da Farmácia */}
<div className="flex justify-center">
<img
            src="https://ik.imagekit.io/ze38lxu2h/imagem%20farmacia.png"
            alt="Imagem Página Home Farmácia"
            className="w-4/5 max-w-sm object-contain"
          />
</div>
 
      </div>
</main>
  );
};
 
export default Home;