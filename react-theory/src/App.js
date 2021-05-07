import React, { Component } from "react";
import "./App.css";
import Moto from "./Moto/Moto";

class App extends Component {
  //  компонент App

  state = {
    motorcycle: [
      { name: "Honda", model: "Transalp", year: 1999 },
      { name: "Yamaha", model: "Fazer600", year: 2006 },
      { name: "BMW", model: "GSA 1200", year: 2020 },
    ],
    pageTitleChoice: "Your choice is my friend motorcyclist",

    showMoto: false,
  };

  // pageTitleChoice = (newChoice) => {
  //    this.setState({
  //    pageTitleChoice: newChoice,
  //    });
  // };

  showToggle = () => {
    this.setState({
      showMoto: !this.state.showMoto,
    });
  };

  //   inputChange = (event) => {  //  получение инф из input
  //      this.setState({
  //       pageTitleChoice: event.target.value
  //      })
  //   }

  onChangeMotoName(name, index) {
    // console.log(name, index);

    const moto = this.state.motorcycle[index]; //  получаем то, что хотим изменить
    moto.name = name; //  получили
    const motos = [...this.state.motorcycle]; //  клонируем массив

    // console.log(motos);
    motos[index] = moto;
    this.setState({ motos });
  }

  onDeleteChange(index) {
    let mot = this.state.motorcycle.concat();
    // console.log(motos);
    mot.splice(index, 1);
    this.setState({ mot });
  }

  render() {
    const divStyle = {
      // backgroundColor: "#4785b8",
      textAlign: "center",
      border: "3px solid red",
    };
    const hStyle = {
      color: "black",
      fontSize: "20px",
    };

    /* ниже конструкци с if без тернарного оператора */

    // let motorcycles = null
    //  if (this.state.showMoto) {
    //     motorcycles = this.state.motorcycle.map((elem, index) => {
    //       return (
    //          <Moto
    //          key = {index}
    //          name = {elem.name}
    //          model = {elem.model}
    //          year = {elem.year}
    //          onChangeMoto = {() => this.pageTitleChoice(elem.name)}
    //          ></Moto>
    //       )
    //    })
    //  }

    return (
      <div style={divStyle}>
        <h1 style={hStyle}>{this.state.pageTitleChoice}</h1>

        {/* <input type='text' onChange = {this.inputChange}></input> */}

        {/* <button onClick={this.pageTitleChoice.bind(this, "Very Good")}>
            {" "}
            Your choice{" "}
         </button> */}

        <button onClick={this.showToggle}> Toggle Moto </button>

        {/* { motorcycles }  Это относится к конструкции с if */}

        {/* ниже конструкция  ? и : (тернарники)*/}

        {this.state.showMoto
          ? this.state.motorcycle.map((elem, index) => {
              // после return нельзя писать блок if, else.(только тернарники)!!!
              return (
                <Moto
                  key={index}
                  name={elem.name}
                  model={elem.model}
                  year={elem.year}
                  onDelete={this.onDeleteChange.bind(this, index)}
                  onChangeMotoName={(event) =>
                    this.onChangeMotoName(event.target.value, index)
                  }
                ></Moto>
              );
            })
          : null}

        {/* <Moto
            name={motorcycle[0].name}
            model={motorcycle[0].model}
            year={motorcycle[0].year}
            onChangeMoto={this.pageTitleChoice.bind(this, motorcycle[0].name)} //  метод bind лучше подходит
         />
         <Moto
            name={motorcycle[1].name}
            model={motorcycle[1].model}
            year={motorcycle[1].year}
            onChangeMoto={() => this.pageTitleChoice(motorcycle[1].name)} //  этот метод более нагружен, когда много компонентов в проекте
         />
         <Moto
            name={motorcycle[2].name}
            model={motorcycle[2].model}
            year={motorcycle[2].year}
            onChangeMoto={() => this.pageTitleChoice(motorcycle[2].name)} //  этот метод более нагружен, когда много компонентов в проекте
         /> */}
      </div>
    );
  }
}

export default App;
