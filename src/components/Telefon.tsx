import type { TelefonTipus } from "../types/telefonTipus";

function Telefon(props: { telefonok: TelefonTipus[] }) {
  return (
    <>
      <h2>Telefonok listája</h2>

      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Gyártó</th>
            <th>Ár</th>
            <th>Memória (GB)</th>
          </tr>
        </thead>

        <tbody>
          {props.telefonok.map((telefon) => (
            <tr key={telefon.id}>
              <td>{telefon.nev}</td>
              <td>{telefon.gyarto}</td>
              <td>{telefon.ar} Ft</td>
              <td>{telefon.memoria} GB</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Telefon;