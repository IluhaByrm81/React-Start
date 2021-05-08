import React, { Component } from "react";
import "./App.css";
import Moto from "./Moto/Moto";

class App extends Component {
  //  компонент App

  //  состояние описывающее компонент

  state = {
    motorcycle: [
      { name: "Honda", model: "Transalp", year: 1999 },
      { name: "Yamaha", model: "Fazer600", year: 2006 },
      { name: "BMW", model: "GSA 1200", year: 2020 },
    ],
    choiceTitlePage: "Your choice is my friend motorcyclist", //  choiceTitlePage отвечает за выбор заголовка
    showMoto: false,
  };

  onChangeName(name, index) {
    //  console.log(name, index);

    //  создаем клона, чтобы поменять текущее состояние

    const moto = this.state.motorcycle[index]; //  получение элемента
    moto.name = name;
    const newMotos = [...this.state.motorcycle];
    newMotos[index] = moto;
    this.setState({
      moto: newMotos,
    });
  }

  deleteElement(index) {
    const moto = [...this.state.motorcycle];
    moto.splice(index, 1);
    this.setState({
      motorcycle: moto,
    });
  }

  // сhangeTitlePage = (newTitle) => {  //  сhangeTitlePage - это метод (ref) отвечает за изменение заголовка
  //    this.setState({       //  этот метод изменяет состояние компонента
  //       choiceTitlePage: newTitle
  //    })
  // }

  // inputChange = (event) => {
  //    this.setState({
  //       choiceTitlePage: event.target.value
  //    })
  // }

  showToggle = () => {
    this.setState({
      showMoto: !this.state.showMoto,
    });
  };

  render() {
    /* ниже конструкци с if без тернарного оператора */

    let motos = null;
    if (this.state.showMoto) {
      motos = this.state.motorcycle.map((elem, index) => {
        return (
          <Moto
            key={index}
            name={elem.name}
            model={elem.model}
            year={elem.year}
            onDelete={this.deleteElement.bind(this, index)}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
          ></Moto>
        );
      });
    }

    return (
      <div className="Container">
        <h1 className="H1">{this.state.choiceTitlePage}</h1>
        <button onClick={this.showToggle}>Toggle Moto</button>

        <div className="Button">{motos}</div>
      </div>
    );
  }
}
export default App;

