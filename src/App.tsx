import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Footer from './components/footer/Footer';


import Home from './pages/home/Home';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import ListarCategorias from './components/categoria/listacategoria/ListaCategoria';
import Navbar from './components/navbar/Navbar';
 

 
function App() {

  return (
<BrowserRouter>
<div className="min-h-screen flex flex-col justify-between bg-slate-100">
<Navbar />
<div className="flex-1 flex flex-col">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/categorias" element={<ListarCategorias />} />
<Route path="/cadastrarcategoria" element={<FormCategoria />} />
<Route path="/editarcategoria/:id" element={<FormCategoria />} />
<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
</Routes>
</div>
<Footer />
</div>
</BrowserRouter>

  );

}
 
export default App;
 