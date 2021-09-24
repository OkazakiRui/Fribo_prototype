import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import { jsx as _jsx } from "react/jsx-runtime";

// function App() {
//   return _jsx("p", { children: "Hello, World!" });
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello React</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const name = "Patty";
// const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>;
// const App = () => {
//   return <div>{greet(name)}</div>;
// };
{
  /*
  <div />
  <div></div>
  <div>{undefined}</div>
  <div>{null}</div>
  <div>{true}</div>
  <div>{false}</div>
  
  全て何も出力されない
  */
}

// const n = Math.floor(Math.random() * 10); // 0 〜 9 の整数を生成
// const threshold = 5;
// const App = () => {
//   return (
//     <div>
//       {n > threshold && <p>`n` is larger than {threshold}</p>}
//       <p>`n` is {n % 2 === 0 ? "even" : "odd"}</p>
//     </div>
//   );
// };

// const list = ["Patty", "Rolley", "Bobby"];
// const App = () => {
//   return (
//     <ul>
//       {list.map((name) => (
//         <li>Hello, {name}!</li>
//       ))}
//     </ul>
//   );
// };

const App = () => {
  return (
    <>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </>
  );
};

export default App;
