import React, { Component } from 'react';
import data from '../data/data.json'
import {Link} from 'react-router-dom'

class ItemList extends Component {

  render() {
    const products = data.data.find( (products) => {
      return products.category === this.props.match.params.cat
    })
    console.log(products);
    let imageStyle={
      width: '20rem'
    }
    return (
      <div className='container'>
        <h2>Item List</h2>
        <div className="row">
          {products.items.map((item) => {
            return(
              <div className="col-sm-4" key={item.id}>
                <div className="card" style={imageStyle}>
                  <img className="card-img-top"src={item.image} />
                  <div className="card-block">
                    <Link to={`/items/${this.props.match.params.cat}/${item.id}`} ><h2 className="card-title">{item.name}</h2> </Link>
                    <h4 className="card-subtitle mb-2 text-muted">{item.brand}</h4>
                    <p className="card-text"><strong>${item.price}</strong> </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    );
  }

}

export default ItemList;
