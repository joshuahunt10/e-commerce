import React, { Component } from 'react';
import data from '../data/data.json'

class ItemList extends Component {

  render() {
    const products = data.data.find( (products) => {
      return products.category === this.props.match.params.cat
    })

    return (
      <div>
        <h2>Item List</h2>
        {products.items.map((item) => {
          return(
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.brand}</h4>
              <img src={item.image} />
              <p>{item.price} </p>
              <hr />
            </div>
          )
        })}
      </div>
    );
  }

}

export default ItemList;
