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
import Swal from "sweetalert2";
import { Box, Button, Slider } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
export default function Card() {
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [modal, setModal] = useState(false);
  let btns = ["", "meva", "accessuar", "texnika", "poliz"];
  let [filterText, setFilterText] = useState("");
  let [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 0,
      rasm: rasm,
      nomi: "olma",
      soni: 1,
      narx: 100,
      aksiya: 5,
      like: false,
      category: "meva",
    },
    {
      id: 1,
      rasm: rasm1,
      nomi: "computer",
      soni: 1,
      narx: 28,
      aksiya: 12,
      like: false,
      category: "texnika",
    },
    {
      id: 2,
      rasm: rasm3,
      nomi: "telefon",
      soni: 1,
      narx: 32,
      aksiya: 14,
      like: false,
      category: "texnika",
    },
    {
      id: 3,
      rasm: rasm,
      nomi: "airPods",
      soni: 1,
      narx: 75,
      aksiya: 5,
      like: false,
      category: "accessuar",
    },
    {
      id: 4,
      rasm: rasm2,
      nomi: "karam",
      soni: 1,
      narx: 41,
      aksiya: 2,
      like: false,
      category: "poliz",
    },
    {
      id: 5,
      rasm: rasm1,
      nomi: "tarvuz",
      soni: 1,
      narx: 82,
      aksiya: 17,
      like: false,
      category: "poliz",
    },
  ]);
  let [filterData, setFilteData] = useState(data);
  const [cart, setCart] = useState([]);
  const [tableBollean, setTableBollean] = useState(true);
  const [inputValue, setInputValue] = useState({
    id: "",
    nomi: "",
    rasm: "",
    like: false,
    soni: 1,
    aksiya: "",
    narx: "",
    category: "",
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
      category: "",
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

  // massivga inputdagi malumotlarni qo'shish va tahrirlash function (funksiyasi)
  function handleSend(e) {
    e.preventDefault();
    if (inputValue.nomi !== "") {
      if (inputValue.id === "") {
        setData([...data, { ...inputValue, id: new Date().getTime() }]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setData(
          data.map((item) => (item.id === inputValue.id ? inputValue : item))
        );
      }

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
    // let confirm = window.confirm("o'chirishni hoxlaysizmi ?");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== parametr));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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

  // edit (tahrirlash) qilish uchun
  function handleEdit(elem) {
    setInputValue(elem);
    setTableBollean(false);
  }
  return (
    <div className="card">
      <nav>
        <h1>logo</h1>
        <div className="flex">
          <button onClick={() => setModal(true)}>
            <FaShoppingCart />
            {cart?.length}
          </button>
          <button>
            <FcLike />
            <span> {data.filter((elem) => elem.like === true).length} </span>
          </button>
        </div>
      </nav>
      <div>
        <input
          type="search"
          placeholder="search..."
          className="searchInput"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <Button
        onClick={() => setTableBollean(!tableBollean)}
        className="changeBox"
        variant="contained"
        color="error"
      >
        {tableBollean ? "card" : "form"}
      </Button>

      {tableBollean ? (
        <div className="boxerAndCategory">
          <div className="categoryBox">
            {btns.map((btn) => {
              return (
                <button
                  key={btn}
                  onClick={() => setFilterText(btn)}
                  className={btn === filterText ? "btnActive" : ""}
                >
                  {btn === "" ? "All" : btn.toUpperCase()}
                </button>
              );
            })}
            <div>
              <Box sx={{ width: "100%" }}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // getAriaLabel={() => "Temperature range"}
                  // getAriaValueText={valuetext}
                />
              </Box>
            </div>
          </div>
          <div className="boxer">
            {filterData.filter((e) => {
              if (
                e?.category.includes(filterText) &&
                value[0] < e.narx &&
                e.narx <= value[1]
              ) {
                return e;
              }
            }).length > 0 ? (
              filterData
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item?.nomi
                      .trim()
                      .toLowerCase()
                      .includes(search.trim().toLowerCase()) ||
                    item?.narx.toString().trim().includes(search.trim())
                  ) {
                    return item;
                  }
                })
                .filter((e) => {
                  if (
                    e?.category.includes(filterText) &&
                    value[0] < e.narx &&
                    e.narx <= value[1]
                  ) {
                    return e;
                  }
                })
                .map((elem, index) => (
                  <div className="box" key={elem.id}>
                    <figure>
                      <span> {elem.aksiya}% </span>
                      <span
                        className="like"
                        onClick={() => handleLike(elem.id)}
                      >
                        {elem.like ? <AiFillLike /> : <AiOutlineLike />}
                      </span>
                      <img src={elem.rasm} alt={elem.nomi} />
                    </figure>
                    <div className="boxText">
                      <h1>{elem.nomi}</h1>
                      <div className="narx">
                        <del>{elem.narx}$</del>
                        {(elem.narx - (elem.narx / 100) * elem.aksiya).toFixed(
                          2
                        )}
                        $
                      </div>
                      <div>
                        category: <b>{elem.category}</b>
                      </div>
                      <button onClick={() => handleEdit(elem)}> edit </button>
                      <button onClick={() => handleCart(elem)}>
                        add to card
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <h1>malumot topilmadi</h1>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSend}>
          <input
            type="text"
            placeholder="nomi"
            onChange={handleInputGetValue}
            name="nomi"
            value={inputValue.nomi}
          />
          <input
            type="text"
            placeholder="aksiya"
            onChange={handleInputGetValue}
            name="aksiya"
            value={inputValue.aksiya}
          />
          <input
            type="text"
            placeholder="narxi"
            onChange={handleInputGetValue}
            name="narx"
            value={inputValue.narx}
          />
          <input type="file" onChange={handleInputGetRasm} />

          <select name="category" onChange={handleInputGetValue}>
            <option value="">mevani tanlang</option>
            <option value="meva">meva</option>
            <option value="texnika">texnika</option>
            <option value="poliz">poliz</option>
            <option value="accessuar">accessuar</option>
          </select>
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
              <th>summa</th>
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
                      {(item.narx - (item.narx / 100) * item.aksiya).toFixed(
                        2
                      ) * item.soni}{" "}
                      $
                    </td>
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
