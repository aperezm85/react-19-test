import { useRef } from "react";

const Input = ({ ref }) => {
  return <input type="text" placeholder="Example" ref={ref} />;
};

export const Form = () => {
  const inputRef = useRef();
  const focusInput = () => {
    if (inputRef) inputRef.current.focus();
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
      <form>
        <Input ref={inputRef} />
      </form>

      <button onClick={focusInput}>Focus the input</button>
    </>
  );
};
