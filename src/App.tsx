import { useEffect, useState } from "react";
import TelefonMuveletek from "./components/phoneActions";
import Telefon from "./components/Telefon";
import type { TelefonTipus } from "./types/telefonTipus";

function App() {
  
  const [telefonok, setTelefonok] = useState<TelefonTipus[]>([]);
  const [isDesc, setIsDesc] = useState<boolean>(true);

  useEffect(() => {
    const sortedTelefonok = [...telefonok].sort((a, b) => {
      if (isDesc) {
        return a.ar - b.ar; // Növekvő sorrend
      } else {
        return b.ar - a.ar; // Csökkenő sorrend
      }
    });
    setTelefonok(sortedTelefonok);
  }, [isDesc]);

  return (
    <>
    <Telefon></Telefon>
    <TelefonMuveletek telefonok={telefonok} setTelefonok={setTelefonok} isDesc={isDesc} setIsDesc={setIsDesc} />
    </>
  )
}

export default App
