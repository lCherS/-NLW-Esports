import { MagnifyingGlassPlus } from 'phosphor-react';
import "./styles/main.css";

import logoImg from "./assets/Logo.svg";
interface ButtonProps {
  title: string;
}

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} className="max-h-40" alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">2 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS:GO</strong>
            <span className="text-zinc-300 text-sm block">44 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World Of Craft
            </strong>
            <span className="text-zinc-300 text-sm block">1 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex</strong>
            <span className="text-zinc-300 text-sm block">3 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">FortNite</strong>
            <span className="text-zinc-300 text-sm block">12 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24}/> Publicar Anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
