import React, { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
 
const FormCategoria: React.FC = () => {
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
 
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }
 
  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
 
    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso!');
      } catch (error) {
        alert('Erro ao atualizar a categoria.');
        console.error(error);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar a categoria.');
        console.error(error);
      }
    }
 
    retornar();
  }
 
  function retornar() {
    navigate('/categorias');
  }
 
  return (
    <main className="flex-1 bg-slate-50 flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-medium text-slate-900 mb-8">
          {id !== undefined ? 'Editar categoria' : 'Cadastrar categoria'}
        </h1>
 
        <form onSubmit={gerarNovaCategoria} className="flex flex-col items-center gap-6">
          <div className="w-full text-left">
            <label htmlFor="nome" className="block text-xs font-semibold text-slate-600 mb-1">
              Categoria
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Categoria"
              value={categoria.nome}
              onChange={atualizarEstado}
              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-800 shadow-sm"
              required
            />
          </div>
 
          <button
            type="submit"
            className="bg-[#2d2e83] hover:bg-[#212263] text-white font-medium text-sm px-10 py-2 rounded shadow transition-colors"
          >
            {id !== undefined ? 'Atualizar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </main>
  );
};
 
export default FormCategoria;