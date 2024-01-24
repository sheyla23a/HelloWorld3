import { useState } from "react";

const Helloworld2 = (props) => {
  const [state, setState] = useState();
  return (
    <section>
      <h1>
        Hello {props.textoAdicional} {state}</h1>
      <button className="btn btn-secondary" onClick={()=>{setState("(from changed state!)")}}>
        Click me
      </button>
    </section>
  );
};

export default Helloworld2;

