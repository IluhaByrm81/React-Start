import React from "react";
import Radium from "radium";
import "./Moto.scss";

//  КОМПОНЕНТ MOTO
class Moto extends React.Component {

   // componentWillReceiveProps(props) {

   // }

   // shouldComponentUpdate(nextProps, nextState) {

   // }

   // componentWillUpdate(nextProps, nextState) {

   // }

   // componentDidUpdate() {

   // }

  render() {
    const inputClass = ["input"];

    if (this.props.name !== "") inputClass.push("green");
    else inputClass.push("red");
    if (this.props.name.length > 6) inputClass.push("bold");

    const styleMoto = {
      border: "1px solid black",
      boxShadow: "0 10px 5px 0 rgba(0, 0, 0, .15)",
      ":hover": {
        border: "2px solid orange",
        boxShadow: "0 20px 5px 0 rgba(0, 0, 0, .25)",
        cursor: "pointer",
      },
    };

    return (
      <div className="Moto" style={styleMoto}>
        <h3>Moto name : {this.props.name} </h3>
        <p>
          Model : <strong> {this.props.model} </strong>
        </p>
        <p>
          Year : <strong> {this.props.year} </strong>
        </p>

        <input
          className={inputClass.join(" ")}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        ></input>

        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}
export default Radium(Moto);
