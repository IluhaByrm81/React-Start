import React from "react";

const moto = (props) => {
   return (
      <div style={{ border: "1px solid black", marginBottom: '10px', display: 'block', padding: '10px' }}>
      <h3>Moto name : {props.name} </h3>
      <p>
         Model : <strong> {props.model} </strong>
      </p>
      <p>
         Year : <strong> {props.year} </strong>
      </p>

      <input type='text' onChange = {props.onChangeMotoName} value = {props.name}></input>

      <button onClick={props.onDelete}>Delete</button>
      </div>
   );
};

export default moto;
