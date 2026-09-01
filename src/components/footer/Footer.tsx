import React from 'react';
import { LinkedinLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';
 
const Footer: React.FC = () => {
  const data: number = new Date().getFullYear();
 
  return (
<footer className="w-full bg-[#2d2e83] text-white py-4 mt-auto">
<div className="container mx-auto flex flex-col items-center gap-1">
<p className="text-sm font-bold">
          Farmácia Generation | Copyright: {data}
</p>
<p className="text-xs text-slate-300">
          Acesse nossas Redes Sociais
</p>
        {/* Ícones Sociais */}
<div className="flex gap-2 mt-1">
<a href="#" className="hover:text-slate-300 transition-colors" title="LinkedIn">
<LinkedinLogo size={24} weight="bold" />
</a>
<a href="#" className="hover:text-slate-300 transition-colors" title="Instagram">
<InstagramLogo size={24} weight="bold" />
</a>
<a href="#" className="hover:text-slate-300 transition-colors" title="Facebook">
<FacebookLogo size={24} weight="bold" />
</a>
</div>
</div>
</footer>
  );
};
 
export default Footer;