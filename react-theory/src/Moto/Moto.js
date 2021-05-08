import React from "react";
import "./Moto.css";

//  КОМПОНЕНТ MOTO

const moto = (props) => {
  const inputClass = ["input"];

  if (props.name !== "") inputClass.push("green");
  else inputClass.push("red");
  if (props.name.length > 6) inputClass.push("bold");

  return (
    <div className="Moto">
      <h3>Moto name : {props.name} </h3>
      <p>
        Model : <strong> {props.model} </strong>
      </p>
      <p>
        Year : <strong> {props.year} </strong>
      </p>

      <input
        className={inputClass.join(" ")}
        type="text"
        onChange={props.onChangeName}
        value={props.name}
      ></input>

      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default moto;
