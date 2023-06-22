import React, { useState } from "react";
import "./style.css";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
import rasm from "../img/cambg_1.jpg";
import rasm1 from "../img/cambg_2.jpg";
import rasm2 from "../img/cambg_5.jpg";
import rasm3 from "../img/cambg_7.jpg";
import { MdDelete } from "react-icons/md";
export default function Card() {
  const [modal, setModal] = useState(false);
  const [data] = useState([
    { id: 0, rasm: rasm, nomi: "nomi", soni: 1, narx: 10, aksiya: 5 },
    { id: 1, rasm: rasm1, nomi: "lorem", soni: 1, narx: 28, aksiya: 12 },
    { id: 2, rasm: rasm3, nomi: "ipsum", soni: 1, narx: 32, aksiya: 14 },
    { id: 3, rasm: rasm, nomi: "name", soni: 1, narx: 75, aksiya: 5 },
    { id: 4, rasm: rasm2, nomi: "nomi", soni: 1, narx: 41, aksiya: 2 },
    { id: 5, rasm: rasm1, nomi: "nomi", soni: 1, narx: 82, aksiya: 17 },
  ]);
  const [cart, setCart] = useState([]);
  let handleCart = (argument) => {
    if (cart.filter((item) => item.id === argument.id).length === 0) {
      setCart([...cart, argument]);
    } else {
      alert("bu mahsulot qo'shilgan");
    }
  };

  // karzinkani ichidan bir mahsulot o'chirish
  function andleDeleteCart(parametr) {
    let confirm = window.confirm("o'chirishni hoxlaysizmi ?");
    if (confirm) {
      setCart(cart.filter((item) => item.id !== parametr));
    }
  }
  // karzinkada plus minus funcsiyasini tuzish
  function cartMinusFunc(item) {
    setCart(
      cart.map((elem) =>
        elem.id === item.id && elem.soni > 1
          ? { ...elem, soni: elem.soni - 1 }
          : elem
      )
    );
  }
  function cartPlusFunc(id) {
    setCart(
      cart.map((elem) =>
        elem.id === id ? { ...elem, soni: elem.soni + 1 } : elem
      )
    );
  }
  return (
    <div className="card">
      <nav>
        <h1>logo</h1>
        <button onClick={() => setModal(true)}>
          <AiOutlineShoppingCart />
          <span> {cart.length} </span>
        </button>
      </nav>
      <div className="boxer">
        {data.map((elem, index) => (
          <div className="box" key={elem.id}>
            <figure>
              <span> {elem.aksiya}% </span>
              <img src={elem.rasm} alt={elem.nomi} />
            </figure>
            <div className="boxText">
              <h1>{elem.nomi}</h1>
              <div className="narx">
                <del>{elem.narx}$</del>
                {(elem.narx - (elem.narx / 100) * elem.aksiya).toFixed(2)}$
              </div>
              <button onClick={() => handleCart(elem)}> add to card </button>
            </div>
          </div>
        ))}
      </div>
      <div className={modal ? "cart" : "cart cartClose"}>
        <button className="btnClose" onClick={() => setModal(false)}>
          <AiFillCloseCircle />
        </button>
        <table border={1}>
          <thead>
            <tr>
              <th>№</th>
              <th>nomi</th>
              <th>rasm</th>
              <th>soni</th>
              <th>narxi</th>
              <th>aksiya</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th> {index + 1} </th>
                    <td> {item.nomi} </td>
                    <td>
                      <img src={item.rasm} alt={item.nomi} />
                    </td>
                    <td>
                      <button onClick={() => cartMinusFunc(item)}>
                        minus
                      </button>
                      <span className="soni">{item.soni}</span>
                      <button onClick={() => cartPlusFunc(item.id)}>
                        plus
                      </button>
                    </td>
                    <td>
                      <del>{item.narx}$</del>
                      {(item.narx - (item.narx / 100) * item.aksiya).toFixed(2)}
                      $
                    </td>
                    <td> {item.aksiya} </td>
                    <td>
                      <button
                        className="btnDelete"
                        onClick={() => andleDeleteCart(item.id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={100}> no data... </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
