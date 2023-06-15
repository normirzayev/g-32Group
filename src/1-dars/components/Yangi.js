import "../App.css";
// errow function
const Input = (prop) => {
  let { matn } = prop;
  return (
    <div>
      <input type="text" placeholder={matn} />
    </div>
  );
};

export default Input;
// haqiqiy function
export function Yangi({ style }) {
  return (
    <>
      <h1 className={style}> yangi </h1>
    </>
  );
}

// nomsiz function
export const Button = function (prop) {
  console.log(prop.text);
  // let matn = "lorem";
  return (
    <div>
      <button>click me</button>
      <h1> {prop.text} </h1>
    </div>
  );
};

// export const Input1 = ({ matn }) => {
//   console.log(matn);
//   return (
//     <div>
//       <input type="text" placeholder='salom' />
//     </div>
//   );
// };
