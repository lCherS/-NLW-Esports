import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import logoImg from "./assets/Logo.svg";
import { GameBanner } from "./components/GameBanner";
import { useState, useEffect } from "react";
import { CreatAdBanner } from "./components/CreateAdBanner";
import axios from "axios";
// import { Input } from "./components/Form/input";
import { CreateAdModal } from "./components/CreateAdModal";
interface ButtonProps {
  title: string;
}

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((res) => {
      setGames(res.data);
    });
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center my-14">
      <img src={logoImg} className="max-h-40" alt="" />

      <h1 className="text-6xl text-white font-black mt-14">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.Ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreatAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
