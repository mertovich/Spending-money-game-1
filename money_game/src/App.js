import './App.css';
import NavBar from './Component/Navbar'
import ProductList from './Component/ProductList';
import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';



export default class App extends Component {
  state = {
    Prodoct: [
      { id: 1, prodoctName: 'Iphone 11', pirace: 13000 ,quantity:1,prodoctImg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022219953'},
      { id: 2, prodoctName: 'Tesla S', pirace: 1300000 ,quantity:1,prodoctImg:'https://cdn.motor1.com/images/mgl/oRgrE/s1/2021-tesla-model-s-plaid.webp'},
      { id: 3, prodoctName: 'Bread', pirace: 2 ,quantity:1,prodoctImg:'https://www.thespruceeats.com/thmb/SlKg4bYyXu4u_37vl8zW0XyEFRI=/1500x1000/filters:fill(auto,1)/easy-honey-white-bread-recipe-428160-hero-01-22ed0bda55f643318b4c658a2c020647.jpg'},
      { id: 4, prodoctName: 'Iphone 12', pirace: 14000 ,quantity:1,prodoctImg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-select-2020?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604343708000'},
      { id: 5, prodoctName: 'Iphone13', pirace: 19000 ,quantity:1,prodoctImg:'https://i2.milimaj.com/i/milliyet/75/750x0/612b64fd86b245376c1293ac.jpg'},
      { id: 6, prodoctName: 'MacBook air', pirace: 11000 ,quantity:1,prodoctImg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'},
      { id: 7, prodoctName: 'MacBook pro', pirace: 20000 ,quantity:1,prodoctImg:'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'},
    ],
    TotalMoney: 100000,
    Cart: []
  }

  moneyErrorAlert = () => toast.error("You Don't Have Enough Money", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  addToCartAlert = () => toast.success('Added', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  deleteToCartAlert = ()=>{ toast.info('The selected product has been deleted' , {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  addToCart = (product) => {
    var cartList = this.state.Cart
    var result = this.state.TotalMoney - product.pirace
    if (result <= 0) {
      this.moneyErrorAlert()
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
    this.addToCartAlert()
  }
  deleteToCart = (Cart)=>{
    let cartList = this.state.Cart
    let newList =  cartList.filter((item)=>{
      if (item !== Cart) {
        return item
      }
    let result = this.state.TotalMoney + (Cart.quantity * Cart.pirace)
    this.setState({TotalMoney:result})
    })
    this.setState({Cart:newList})
    this.deleteToCartAlert()
  }
  render() {
    return (
      <div>
        <NavBar TotalMoney={this.state.TotalMoney} CartList={this.state.Cart} deleteToCart={this.deleteToCart} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col xs='12'>
              <ProductList addToCart={this.addToCart} prodoctList={this.state.Prodoct} />
              <ToastContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
