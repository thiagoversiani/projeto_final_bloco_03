import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, User, ShoppingCart, Plus } from '@phosphor-icons/react';
 
const Navbar: React.FC = () => {
  return (
<header className="w-full bg-[#2d2e83] text-white py-4 px-6 shadow-md">
<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Farmácia */}
<Link to="/home" className="flex items-center gap-2">
<div className="bg-red-600 p-1 rounded-sm flex items-center justify-center">
<Plus size={22} weight="bold" className="text-white" />
</div>
<span className="font-extrabold text-xl tracking-wider">FARMÁCIA</span>
</Link>
 
        {/* Campo de Busca */}
<div className="flex-1 max-w-md w-full">
<div className="relative flex items-center">
<input
              type="text"
              placeholder="Procurar"
              className="w-full bg-white text-slate-800 text-sm px-4 py-1.5 rounded-l-md focus:outline-none placeholder-slate-400"
            />
<button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-r-md flex items-center justify-center transition-colors">
<MagnifyingGlass size={18} weight="bold" />
</button>
</div>
</div>
 
        {/* Links de Navegação */}
<nav className="flex items-center gap-6 text-sm font-medium">
<Link to="/produtos" className="hover:text-slate-300 transition-colors">
            Produtos
</Link>
<Link to="/categorias" className="hover:text-slate-300 transition-colors">
            Categorias
</Link>
<Link to="/cadastrarcategoria" className="hover:text-slate-300 transition-colors">
            Cadastrar Categoria
</Link>
 
          <div className="flex items-center gap-3 ml-2">
<button title="Perfil" className="hover:text-slate-300 transition-colors">
<User size={24} />
</button>
<button title="Carrinho" className="hover:text-slate-300 transition-colors">
<ShoppingCart size={24} />
</button>
</div>
</nav>
 
      </div>
</header>
  );
};
 
export default Navbar;