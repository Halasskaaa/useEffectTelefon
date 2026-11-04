import { useEffect, useState } from "react";
import type { TelefonTipus } from "../types/telefonTipus";

function Telefon() {
    const URL = "phones.json";

    const [telefonok, setTelefonok] = useState<TelefonTipus[]>([]);

    useEffect(() => {
        async function adatokBetoltese() {
            try {
                const response = await fetch(URL);
                const adatok: TelefonTipus[] = await response.json();
                setTelefonok(adatok);
            } catch (error) {
                console.error("Hiba történt az adatok betöltésekor:", error);
            }
        }
        adatokBetoltese();
    }, []);

    return (
        <>
            <h2>Telefonok listája</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Gyártó</th>
                        <th>Ár</th>
                        <th>Memória</th>
                        <th>Tárhely</th>
                        <th>Kijelző</th>
                        <th>Operációs Rendszer</th>
                    </tr>
                </thead>
                <tbody>
                    {telefonok.map((telefon) => (
                        <tr key={telefon.id}>
                            <td>{telefon.id}</td>
                            <td>{telefon.nev}</td>
                            <td>{telefon.gyarto}</td>
                            <td>{telefon.ar}</td>
                            <td>{telefon.memoria}</td>
                            <td>{telefon.tarhely}</td>
                            <td>{telefon.kijelzo}</td>
                            <td>{telefon.operaciosRendszer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default Telefon;