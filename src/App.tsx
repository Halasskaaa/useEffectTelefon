import { useEffect, useState } from "react";
import Telefon from "./components/Telefon";
import type { TelefonTipus } from "./types/telefonTipus";
import TelefonMuveletek from "./components/phoneActions";

function App() {

  const [telefonok, setTelefonok] = useState<TelefonTipus[]>([]);
  const [betoltes, setBetoltes] = useState<boolean>(true);
  const [novekvo, setNovekvo] = useState<boolean>(true);

  useEffect(() => {
    fetch("./phones.json")
      .then(response => response.json())
      .then(data => setTelefonok(data))
      .finally(() => setBetoltes(false))
  }, []);

  const rendezettTelefonok = [...telefonok].sort((a, b) => {
    if (novekvo) {
      return a.nev.localeCompare(b.nev);
    } else {
      return b.nev.localeCompare(a.nev);
    }
  })

  return (
    <>
      {betoltes ? (
        <p>Adatok betöltése...</p>
      ) : (
        <Telefon telefonok={rendezettTelefonok} />
      )}

      <TelefonMuveletek
        novekvo={novekvo}
        setNovekvo={setNovekvo}
      />
    </>
  )
}

export default App
