import React from "react";
import Radium from 'radium'
import "./Moto.scss";

//  КОМПОНЕНТ MOTO

const moto = (props) => {
  const inputClass = ["input"];

  if (props.name !== "") inputClass.push("green");
  else inputClass.push("red");
  if (props.name.length > 6) inputClass.push("bold");

  const styleMoto = {
   border: '1px solid black',
   boxShadow : '0 10px 5px 0 rgba(0, 0, 0, .15)',
   ':hover': {
      border: '2px solid orange',
      boxShadow: '0 20px 5px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer',
   }
  }

  return (
    <div className="Moto" style={styleMoto}>
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

export default Radium(moto);
