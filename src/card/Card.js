import React, { useState } from "react";
import "./style.css";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
import rasm from "../img/cambg_1.jpg";
import rasm1 from "../img/cambg_2.jpg";
import rasm2 from "../img/cambg_5.jpg";
import rasm3 from "../img/cambg_7.jpg";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
export default function Card() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 0,
      rasm: rasm,
      nomi: "nomi",
      soni: 1,
      narx: 10,
      aksiya: 5,
      like: false,
    },
    {
      id: 1,
      rasm: rasm1,
      nomi: "lorem",
      soni: 1,
      narx: 28,
      aksiya: 12,
      like: false,
    },
    {
      id: 2,
      rasm: rasm3,
      nomi: "ipsum",
      soni: 1,
      narx: 32,
      aksiya: 14,
      like: false,
    },
    {
      id: 3,
      rasm: rasm,
      nomi: "name",
      soni: 1,
      narx: 75,
      aksiya: 5,
      like: false,
    },
    {
      id: 4,
      rasm: rasm2,
      nomi: "nomi",
      soni: 1,
      narx: 41,
      aksiya: 2,
      like: false,
    },
    {
      id: 5,
      rasm: rasm1,
      nomi: "nomi",
      soni: 1,
      narx: 82,
      aksiya: 17,
      like: false,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [tableBollean, setTableBollean] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: "",
    nomi: "",
    rasm: "",
    like: false,
    soni: 1,
    aksiya: "",
    narx: "",
  });

  const clearInputValue = () => {
    setInputValue({
      id: "",
      nomi: "",
      rasm: "",
      like: false,
      soni: 1,
      aksiya: "",
      narx: "",
    });
  };

  const handleInputGetValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputGetRasm = (e) => {
    console.log(e.target.files[0]);
    setInputValue({
      ...inputValue,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };

  // massivga inputdagi malumotlarni qo'shish
  function handleSend(e) {
    if (inputValue.nomi !== "") {
      e.preventDefault();
      setData([...data, { ...inputValue, id: new Date().getTime() }]);
      setTableBollean(true);
      clearInputValue();
    } else {
      alert("nomini kiritng");
    }
  }
  let handleCart = (argument) => {
    if (cart.filter((item) => item.id === argument.id).length === 0) {
      setCart([...cart, argument]);
    } else {
      alert("bu mahsulot qo'shilgan");
    }
  };

  // karzinkani ichidan bir mahsulot o'chirish
  function handleDeleteCart(parametr) {
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

  // like function
  const handleLike = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    );
  };

  return (
    <div className="card">
      <nav>
        <h1>logo</h1>
        <div className="flex">
          <button onClick={() => setModal(true)}>
            <AiOutlineShoppingCart />
            <span> {cart.length} </span>
          </button>
          <button>
            <FcLike />
            <span> {data.filter((elem) => elem.like === true).length} </span>
          </button>
        </div>
      </nav>

      <button
        onClick={() => setTableBollean(!tableBollean)}
        className="changeBox"
      >
        {tableBollean ? "card" : "form"}
      </button>

      {tableBollean ? (
        <div className="boxer">
          {data.map((elem, index) => (
            <div className="box" key={elem.id}>
              <figure>
                <span> {elem.aksiya}% </span>
                <span className="like" onClick={() => handleLike(elem.id)}>
                  {elem.like ? <AiFillLike /> : <AiOutlineLike />}
                </span>
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
      ) : (
        <form onSubmit={handleSend}>
          <input
            type="text"
            placeholder="nomi"
            onChange={handleInputGetValue}
            name="nomi"
          />
          <input
            type="text"
            placeholder="aksiya"
            onChange={handleInputGetValue}
            name="aksiya"
          />
          <input
            type="text"
            placeholder="narxi"
            onChange={handleInputGetValue}
            name="narx"
          />
          <input type="file" onChange={handleInputGetRasm} />
          <button type="submit">send</button>
        </form>
      )}

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
                      <button onClick={() => cartMinusFunc(item)}>minus</button>
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
                        onClick={() => handleDeleteCart(item.id)}
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
