import React, { Component } from 'react'
import { Container , Button} from 'reactstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Container>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Prodoct Name</th>
                                <th scope="col">Pirace</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.prodoctList.map(product=>(
                                <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.prodoctName}</td>
                                <td>{product.pirace} TL</td>
                                <td><Button onClick={()=>this.props.addToCard(product)} color="success" outline>add</Button>  </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </div>
        )
    }
}
