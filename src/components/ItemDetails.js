import React, { Component } from 'react';
import data from '../data/data.json'

class ItemDetails extends Component {

  render() {
    const products = data.data.find( (products) => {
      return products.category === this.props.match.params.cat
    })
    console.log('props', this.props.match.params.id);
    const product = []
    for (var i = 0; i < products.items.length; i++) {
      if(products.items[i].id === parseInt(this.props.match.params.id, 10)){
        console.log('in the if');
        product.push(products.items[i])
      }
    }
    const chosenItem = product[0]
    console.log('products on the itemdetails page', product);
    return (
      <div>
        <div>
          <img src={chosenItem.image} />
          <h2>Name: {chosenItem.name}</h2>
          <h4>By: {chosenItem.brand}</h4>
          <p>Description: {chosenItem.description}</p>
          <strong>${chosenItem.price}</strong>
        </div>
      </div>
    );
  }

}

export default ItemDetails;
