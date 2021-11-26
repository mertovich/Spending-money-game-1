import React, { Component } from 'react'

import { Button, Container } from 'reactstrap'
import { Offcanvas, Nav, NavDropdown, Navbar } from 'react-bootstrap'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#"> Money : {this.props.TotalMoney} TL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Basket</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <table class="table table-borderless">
                                    <tbody>
                                        {this.props.CartList.map(cartItem=>(
                                        <tr key={cartItem.id}>
                                            <td>{cartItem.prodoctName}</td>
                                            <td>{cartItem.quantity}</td>
                                            <td><Button onClick={()=>this.props.deleteToCard(cartItem)} color="danger" outline>Delete</Button></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        )
    }
}
