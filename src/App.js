import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const URL = 'http://localhost:3000/pizzas/'
class App extends Component {

  state = {
    pizzas: [],
    topping: "",
    size: "",
    vegetarian: null,
    notVegetarian: null,
    pizzaId: null
  }

  editPizza = (pizza) => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      notVegetarian: !pizza.vegetarian,
      pizzaId: pizza.id
    })
  }

  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(pizzasArr => this.setState({
        pizzas: pizzasArr
      }))
  }

  handleChange = (e) => {
    if (e.target.value === "Vegetarian") {
      this.setState({
        vegetarian: true,
        notVegetarian: false
      })
    } else if (e.target.value === "Not Vegetarian") {
      this.setState({
        vegetarian: false,
        notVegetarian: true
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newPizza = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }

    const reqPack = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(newPizza)
    }
    
    fetch(URL + this.state.pizzaId, reqPack)
      .then(r => r.json())
      .then(updatedPizza => this.setState({
        pizzas: this.state.pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza)
      }))

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} {...this.state} handleChange={this.handleChange}/>
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
