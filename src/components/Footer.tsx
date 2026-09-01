import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-eng-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-lg bg-white/5 p-1.5 border border-white/10 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Casa Própria Engenharia e Construções" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl uppercase tracking-tight">Casa Própria</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-500 font-semibold">
                  Engenharia e Construções LTDA
                </span>
              </div>
            </div>
            <p className="font-sans text-eng-200/70 text-sm max-w-sm leading-relaxed mb-8">
              Engenharia de precisão, gestão eficiente e laudos periciais embasados no mais alto rigor técnico desde 1996.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/casa_propria_construcoes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest font-bold mb-6">Navegação</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-eng-200/70">
              <li><a href="#especialidades" className="hover:text-accent-500 transition-colors">Especialidades</a></li>
              <li><a href="#metodologia" className="hover:text-accent-500 transition-colors">Metodologia</a></li>
              <li><a href="#portfolio" className="hover:text-accent-500 transition-colors">Portfólio</a></li>
              <li><a href="#reputacao" className="hover:text-accent-500 transition-colors">Reputação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest font-bold mb-6">Certificações</h4>
            <div className="flex flex-col gap-4 font-mono text-[10px] text-eng-200/50 uppercase tracking-widest">
              <span className="border border-white/10 p-3 text-center">CREA MG</span>
              <span className="border border-white/10 p-3 text-center">Normas ABNT</span>
              <span className="border border-white/10 p-3 text-center">IBAPE</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-eng-200/50">
            &copy; {new Date().getFullYear()} Casa Própria Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 font-sans text-xs text-eng-200/50">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
