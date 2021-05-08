import React, { Component } from "react";
import "./App.scss";
import Moto from "./Moto/Moto";
import Counter from "./Counter/Counter";

class App extends Component {
  //  компонент App
  constructor(props) {
    super(props);

    this.state = {
      motorcycle: [
        { name: "Honda", model: "Transalp", year: 1999 },
        { name: "Yamaha", model: "Fazer600", year: 2006 },
        { name: "BMW", model: "GSA 1200", year: 2020 },
      ],
      choiceTitlePage: "Your choice is my friend motorcyclist",
      showMoto: false,
    };
  }

  onChangeName(name, index) {
    const moto = this.state.motorcycle[index];
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

  showToggle = () => {
    this.setState({
      showMoto: !this.state.showMoto,
    });
  };

//   componentWillMount() {
//     //  подготовка элемента для render(устаревший)
//     console.log("App componentWillMount === ");
//   }

//   componentDidMount() {
//     //  в этом методе идет обращение к серверу
//     console.log("App componentDidMount === ");
//   }

  render() {
    console.log("render === ");
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

        <Counter></Counter>
        <button className='Btn' onClick={this.showToggle}>Toggle Moto</button>

        <div className="Button">{motos}</div>
      </div>
    );
  }
}
export default App;
