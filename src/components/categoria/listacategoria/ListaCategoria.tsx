import React, { useEffect, useState } from 'react';
import type Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardcategoria/CardCategoria';
 
const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
 
  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }
 
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
 
  return (
<main className="flex-1 bg-slate-50 py-8 px-6">
<div className="container mx-auto max-w-6xl">
        {categorias.length === 0 ? (
<p className="text-center text-slate-600 text-lg font-medium">
            Carregando ou nenhuma categoria cadastrada...
</p>
        ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-start">
            {categorias.map((categoria) => (
<CardCategorias key={categoria.id} categoria={categoria} />
            ))}
</div>
        )}
</div>
</main>
  );
};
 
export default ListarCategorias;