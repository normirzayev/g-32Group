import React from "react";

export default function Map(prop) {
  var { data, massivPlus, massivMinus } = prop;
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => massivMinus(item)}>minus</button>
            <h2>
              mahsulotini soni {"=>"} {item.soni}{" "}
            </h2>
            <button onClick={() => massivPlus(item)}>plus</button>
          </div>
        );
      })}
    </div>
  );
}
