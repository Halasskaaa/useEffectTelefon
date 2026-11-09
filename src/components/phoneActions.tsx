export default function TelefonMuveletek(
    props: {
        novekvo: boolean;
        setNovekvo: (novekvo: boolean) => void;
    }) {
    return (
        <div>
            <button onClick={() => props.setNovekvo(!props.novekvo)}>
                {props.novekvo ? "Név szerint csökkenő" : "Név szerint növekvő"}
            </button>
        </div>
    );
}