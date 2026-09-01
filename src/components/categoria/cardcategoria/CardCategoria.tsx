import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Trash } from '@phosphor-icons/react';
import type Categoria from '../../../models/Categoria';


 
interface CardCategoriaProps {

  categoria: Categoria;

}
 
const CardCategorias: React.FC<CardCategoriaProps> = ({ categoria }) => {

  return (
<div className="border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm flex flex-col justify-between w-full max-w-xs">
<div className="bg-[#2d2e83] text-white px-4 py-1.5 font-semibold text-sm">

        Categoria
</div>
 
      <div className="p-6 text-center text-slate-800 font-medium text-lg min-h-25 flex items-center justify-center">

        {categoria.nome}
</div>
 
      {/* Botões com links dinâmicos para Editar e Deletar */}
<div className="flex bg-[#2d2e83] text-white divide-x divide-indigo-900/40">
<Link

          to={`/editarcategoria/${categoria.id}`}

          className="w-1/2 py-2 flex justify-center items-center hover:bg-[#212263] transition-colors"

          title="Editar"
>
<Pencil size={20} />
</Link>
<Link

          to={`/deletarcategoria/${categoria.id}`}

          className="w-1/2 py-2 flex justify-center items-center hover:bg-[#212263] transition-colors"

          title="Deletar"
>
<Trash size={20} />
</Link>
</div>
</div>

  );

};
 
export default CardCategorias;