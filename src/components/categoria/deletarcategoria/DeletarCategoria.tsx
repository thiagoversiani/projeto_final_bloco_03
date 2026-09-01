import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, X } from '@phosphor-icons/react';
import { buscar, deletar } from '../../../services/Service';
import type Categoria from '../../../models/Categoria';
 
const DeletarCategoria: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
 
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
  });
 
  async function buscarPorId(idBuscar: string) {
    try {
      await buscar(`/categorias/${idBuscar}`, setCategoria);
    } catch (error) {
      console.error('Erro ao buscar categoria por ID:', error);
    }
  }
 
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);
 
  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso!');
    } catch (error) {
      alert('Erro ao apagar a categoria.');
      console.error(error);
    }
 
    retornar();
  }
 
  function retornar() {
    navigate('/categorias');
  }
 
  return (
    <main className="flex-1 bg-slate-50 flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-medium text-slate-900 mb-2">
          Deletar categoria
        </h1>
        <p className="text-sm font-semibold text-slate-800 mb-6">
          Você tem certeza de que deseja apagar a categoria a seguir?
        </p>
 
        <div className="border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm mx-auto max-w-xs">
          <div className="bg-[#2d2e83] text-white px-4 py-1.5 font-semibold text-sm text-left">
            Categoria
          </div>
          <div className="p-6 text-center text-slate-800 font-medium text-lg min-h-22.5 flex items-center justify-center">
            {categoria.nome}
          </div>
          
          <div className="flex text-white">
            <button
              onClick={retornar}
              className="w-1/2 bg-red-400 hover:bg-red-500 py-2 flex justify-center items-center transition-colors"
              title="Cancelar"
            >
              <X size={20} weight="bold" />
            </button>
            <button
              onClick={deletarCategoria}
              className="w-1/2 bg-indigo-400 hover:bg-indigo-500 py-2 flex justify-center items-center transition-colors"
              title="Confirmar"
            >
              <Check size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
 
export default DeletarCategoria;