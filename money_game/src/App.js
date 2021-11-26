import './App.css';
import NavBar from './Component/Navbar'
import ProductList from './Component/ProductList';
import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'


export default class App extends Component {
  state = {
    Prodoct: [
      { id: 1, prodoctName: 'Iphone 11', pirace: 13000 ,quantity:1},
      { id: 2, prodoctName: 'Tesla S', pirace: 1300000 ,quantity:1},
      { id: 3, prodoctName: 'Bread', pirace: 2 ,quantity:1},
      { id: 4, prodoctName: 'Iphone 12', pirace: 14000 ,quantity:1},
      { id: 5, prodoctName: 'Iphone13', pirace: 19000 ,quantity:1},
      { id: 6, prodoctName: 'MacBook air', pirace: 11000 ,quantity:1},
      { id: 7, prodoctName: 'MacBook pro', pirace: 20000 ,quantity:1},
    ],
    TotalMoney: 100000,
    Cart: []
  }

  addToCard = (product) => {
    var cartList = this.state.Cart
    var result = this.state.TotalMoney - product.pirace
    if (result <= 0) {
      alert("You Don't Have Enough Money")
      result = this.state.TotalMoney
      return
    }
    var addItem = cartList.find(c=>c.id === product.id)
    if (addItem) {
      addItem.quantity += 1
    }else{
      cartList.push(product)
    }

    this.setState({ TotalMoney: result })
    this.setState({ Cart: cartList })

  }
  deleteToCard = (Cart)=>{
    let cartList = this.state.Cart
    let newList =  cartList.filter((item)=>{
      if (item !== Cart) {
        return item
      }
    let result = this.state.TotalMoney + (Cart.quantity * Cart.pirace)
    this.setState({TotalMoney:result})
    })
    this.setState({Cart:newList})
    
  }
  render() {
    return (
      <div>
        <NavBar TotalMoney={this.state.TotalMoney} CartList={this.state.Cart} deleteToCard={this.deleteToCard} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col xs='12'>
              <ProductList addToCard={this.addToCard} prodoctList={this.state.Prodoct} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
