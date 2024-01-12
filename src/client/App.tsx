import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [serverResponse, setServerResponse] = useState({ __html: "" });

  function handleClick() {
    axios.post("/perm", { length: count }).then((res) => {
      console.log(res);
      setServerResponse({ __html: res.data });
    });
  }

  return (
    <>
      Permutator <br />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <input
        type="number"
        name="permLen"
        id="permLen"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={handleClick}>click me</button>
      <p dangerouslySetInnerHTML={serverResponse}></p>
    </>
  );
}

export default App;

