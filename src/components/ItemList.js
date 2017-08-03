import React, { Component } from 'react';
import data from '../data/data.json'
import {Link} from 'react-router-dom'

class ItemList extends Component {

  render() {
    const products = data.data.find( (products) => {
      return products.category === this.props.match.params.cat
    })
    console.log(products);
    return (
      <div>
        <h2>Item List</h2>
        {products.items.map((item) => {
          return(
            <div key={item.id}>
              <Link to={`/items/${this.props.match.params.cat}/${item.id}`} ><h2>{item.name}</h2> </Link>
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
