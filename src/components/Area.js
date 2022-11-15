import React, { useRef, useState } from "react";
const Area = () => {
  const [area, setArea] = new useState();
  const baseRef = new useRef();
  const alturaRef = new useRef();
  const manejadorChange = () => {
    if (
      baseRef.current.value !== "" &&
      !isNaN(baseRef.current.value) &&
      alturaRef.current.value !== "" &&
      !isNaN(alturaRef.current.value)
    ) {
      setArea(baseRef.current.value * alturaRef.current.value);
    } else {
      setArea("");
    }
  };
  return (
    <div>
      <input ref={baseRef} type="text" onChange={() => manejadorChange()} />
      <input ref={alturaRef} type="text" onChange={() => manejadorChange()} />
      <div>{area}</div>
    </div>
  );
};
export default Area;
