import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="component-padding">
                    <div className="container">
                    <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                   return value.products.map( product => {
                                       return <Product key={product.id} product={product}/>
                                   }); 
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
