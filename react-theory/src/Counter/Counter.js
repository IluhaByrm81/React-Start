import React, {Component} from 'react'

class Counter extends Component {
   state = {
      counter: 0
   }

   addCounter = () => {
      this.setState({
         counter: this.state.counter + 1
      })
   }

   delCounter = () => {
      this.setState({
         counter: this.state.counter - 1
      })
   }
   render() {
      return (
         <>
            <h2>Counter {this.state.counter}</h2>
            <button onClick={this.addCounter}>+</button>
            <button onClick={this.delCounter}>-</button>
         </>
      )
   }
}

export default Counter
