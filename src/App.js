// import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = ["Andriod", "blackberry", "iphone", "windows"];
  const dt = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <h1>Mobile operating systems</h1>
      {data.map((e) => (
        <li>{e}</li>
      ))}
      <h1>Mobile Manufacturers</h1>
      {dt.map((el) => (
        <li>{el}</li>
      ))}
    </div>
  );

  // const dt = ["Samsung", "HTC", "Micromax", "Apple"];

  // return <div>{data.map((e) => Userc(e))}</div>;
}

// function Userc(e) {
//   return (
//     <div>
//       <div>{e}</div>
//     </div>
//   );
// }

export default App;
