import React, { useState } from "react";
import "./style.css";
import rasm from "../img/cambg_1.jpg";
import rasm1 from "../img/cambg_2.jpg";
import rasm2 from "../img/cambg_5.jpg";
import rasm3 from "../img/cambg_7.jpg";
export default function Main() {
  let [data, setData] = useState([
    { id: 0, name: "anjir", soni: 0, rasm: rasm },
    { id: 1, name: "uzum", soni: 0, rasm: rasm1 },
    { id: 2, name: "qulupnay", soni: 15, rasm: rasm2 },
    { id: 3, name: "banan", soni: 0, rasm: rasm3 },
    { id: 4, name: "karam", soni: 0, rasm: rasm },
    { id: 5, name: "xurmo", soni: 0, rasm: rasm2 },
  ]);

  let handlePlus = (e) => {
    setData(
      data.map((item) =>
        e === item.id && item.soni < 10
          ? { ...item, soni: item.soni + 1 }
          : item
      )
    );
  };

  // let handleMinus = (argument) => {
  //   setData(
  //     data.map((elem) =>
  //       elem.id === argument.id && elem.soni > 0
  //         ? { ...elem, soni: elem.soni - 1 }
  //         : elem
  //     )
  //   );
  // };

  let handleMinus = (argument) => {
    if (argument.soni > 0) {
      setData(
        data.map((elem) =>
          elem.id === argument.id ? { ...elem, soni: elem.soni - 1 } : elem
        )
      );
    } else {
      alert("noldan kam bo'lmaydi");
    }
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>name</th>
            <th>rasm</th>
            <th colSpan={3}>action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th> {index + 1} </th>
                  <td> {item.name} </td>
                  <td>
                    <figure>
                      <img src={item.rasm} alt={item.name} />
                    </figure>
                  </td>
                  <td>
                    <button onClick={() => handleMinus(item)}>minus</button>
                  </td>
                  <td>{item.soni}</td>
                  <td>
                    <button onClick={() => handlePlus(item.id)}>plus</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={10}>no data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
