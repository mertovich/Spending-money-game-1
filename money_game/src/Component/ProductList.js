import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'


export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {this.props.prodoctList.map(product => (
                            <div class="col" key={product.id}>
                                <div class="card h-100">
                                    <img src={product.prodoctImg} class="card-img-top" alt="..." height='500' width='350'></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.prodoctName}</h5>
                                        <p>{product.pirace} TL</p>
                                        <p class="card-text"><Button onClick={() => this.props.addToCart(product)} color="success" outline>Add</Button></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}
