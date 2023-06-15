function Map() {
  let text = [
    "anjir",
    "anor",
    "banan",
    "qulupnay",
    "tarvuz",
    "qovun",
    "oshqovoq",
  ];

  let text2 = [
    { id: 1, name: "anjir" },
    { id: 2, name: "anor" },
    { id: 3, name: "banan" },
    { id: 4, name: "qulupnay" },
    { id: 5, name: "tarvuz" },
    { id: 6, name: "qovun" },
    { id: 7, name: "oshqovoq" },
  ];
  return (
    <>
      <div>
        {text.map((value, index) => {
          return (
            <div key={index}>
              {index + 1}
              {value}
            </div>
          );
        })}
      </div>
      <h2>returnsiz</h2>
      <div>
        {text2.map((value, index) => (
          <div key={value.id}>
            {index + 1}
            {value.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Map;
