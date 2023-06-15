import React, { useEffect, useState } from "react";
import Map from "./components/Map";
export default function Main() {
  let [data, setData] = useState([
    { id: 1, name: "islom", soni: 0 },
    { id: 2, name: "karim", soni: 0 },
    { id: 3, name: "olim", soni: 0 },
    { id: 4, name: "mirza", soni: 0 },
    { id: 5, name: "jasur", soni: 0 },
  ]);

  let massivPlus = (parametr) => {
    // console.log(parametr);

    setData(
      data.map((item) =>
        item.id === parametr.id ? { ...item, soni: item.soni + 1 } : item
      )
    );
  };
  let massivMinus = (parametr) => {
    // console.log(parametr);

    setData(
      data.map((item) => {
        return item.id === parametr.id
          ? { ...item, soni: item.soni - 1 }
          : item;
      })
    );
  };

  // let handleClick = () => {
  //   console.log("click ishlayapti ");
  // };

  // let handleFocus = () => {
  //   console.log("focus ishlayapti");
  // };

  // let handleChange = () => {
  //   console.log("change ishlayapti");
  // };
  // let handleKeyDown = (e) => {
  //   console.log(e);
  //   if (e.key === 2) {
  //     alert("2 key bosildi");
  //   }
  // };

  // o'zgaruvchini qiymatini oshirish

  let [number, setNumber] = useState({ son: 0 });

  // useEffect(() => {
  //   setNumber(5);
  // }, []);

  // let number = 0;
  let handlePlus = () => {
    // number = number + 1
    // number += 1
    setNumber({ ...number, son: number.son + 1 });
    console.log(number);
  };

  let handleMinus = () => {
    setNumber({ ...number, son: number.son - 1 });
  };

  return (
    <div>
      <h1>main</h1>
      <Map data={data} massivMinus={massivMinus} massivPlus={massivPlus} />

      {/* <Map data={data} />
      <button onDoubleClick={handleClick}> click me </button>
      <input
        type="checkbox"
        onFocus={handleFocus}
        // onInput={handleChange}
        // onKeyUp={handleKeyDown}
      /> */}
      {/* <input type="text" name="ism" onChange={handlechange} />
      <input type="text" name="email" onChange={handlechange} />
      <input type="text" onChange={handlechange} name="addres" />
      <input type="text" onChange={handlechange} name="number" />
      <input type="text" onChange={handlechange} name="age" /> */}
      {/* <button onClick={handleMinus}> minus </button>
      <h1> son: {number.son} </h1>
      <button onClick={handlePlus}> plus </button> */}
    </div>
  );
}
