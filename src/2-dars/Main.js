import React from "react";
import Map from "./components/Map";

export default function Main() {
  let data = [
    { id: 1, name: "islom" },
    { id: 2, name: "karim" },
    { id: 3, name: "olim" },
    { id: 4, name: "mirza" },
    { id: 5, name: "jasur" },
  ];
  return (
    <div>
      <h1>main</h1>
      <Map data={data} />
    </div>
  );
}
