import { useEffect } from "react";
import type { TelefonTipus } from "../types/telefonTipus";

export default function TelefonMuveletek(
    props: {telefonok: TelefonTipus[],
         setTelefonok: (telefonok: TelefonTipus[]) => void,
          isDesc: boolean,
           setIsDesc: (isDesc: boolean) => void}) 
           {
            useEffect(() => {
                const sortedTelefonok = [...props.telefonok].sort((a, b) => {
                    if (props.isDesc) {
                        return a.ar - b.ar; // Növekvő sorrend
                    } else {
                        return b.ar - a.ar; // Csökkenő sorrend
                    }
                });
                props.setTelefonok(sortedTelefonok);
            }, [props.isDesc]);

            return (
                <div>
                    <button onClick={() => props.setIsDesc(!props.isDesc)}>
                        {props.isDesc ? "Ár szerint növekvő" : "Ár szerint csökkenő"}
                    </button>
                </div>
            );
        }