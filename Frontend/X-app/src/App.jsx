import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-5">
        <Body />
        <Toaster />
      </div>
    </>
  );
}

export default App;
