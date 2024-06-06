import { version } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Seo } from "./components/SEO";
import { Form } from "./components/Form";
import { useState } from "react";

import { preload } from "react-dom";
import Logo from "./components/Logo";

import { UseFetchExample } from "./useExample";
import { UseContextExample } from "./components/useContextExample";
import { Actions } from "./components/Actions";
import { UseOptimisticExample } from "./components/UseOptimisticExample";

function App() {
  // const [show, setShow] = useState(false);

  preload("https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css", {
    as: "style",
    fetchPriority: "low",
  });

  preload("https://react.dev/images/uwu.png", {
    as: "image",
  });

  return (
    <>
      <Seo title={`React version ${version}`} description="Hello React" />

      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Logo />
        <h1>Hello React</h1>

        <small style={{ color: "yellow", fontSize: "10px" }}>
          React version is {version}
        </small>
      </div>

      {/* <button onClick={() => setShow(true)}>Show Form</button> */}

      {/* {show && <Form />} */}
      {/* <Form /> */}

      {/* <UseFetchExample /> */}

      {/* <UseContextExample /> */}

      {/* <Actions /> */}

      <UseOptimisticExample />
    </>
  );
}

export default App;
