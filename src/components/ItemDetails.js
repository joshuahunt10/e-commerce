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
      <div className='container'>
        <div className='row'>
          <div className="col-4">
            <img src={chosenItem.image} />

          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-2">
                <b>Name:</b>
              </div>
              <div className="col-5">
                <p>{chosenItem.name}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <b>By:</b>
              </div>
              <div className="col-5">
                <p>{chosenItem.brand}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <b>Description:</b>
              </div>
              <div className="col-6">
                <p>{chosenItem.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <b></b>
              </div>
              <div className="col-5">
                <p>${chosenItem.price}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }

}

export default ItemDetails;
