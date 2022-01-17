import React, { Component } from 'react'

export default class ProductList extends Component {
  deleteProducts = (id) => {
    console.log(id)
  }
  render() {
    const { pid: id, img: url, title: name, price, quantity } = this.props.info
    return (
      <>
        <tbody>
          <tr>
            <td>
              <img src={url} alt={name} />
            </td>
            <td>{name}</td>
            <td>Grocery</td>
            <td>Grocery Shop</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
              <span>publish</span>
            </td>
            <td>
              <i
                class='far fa-trash-alt'
                onClick={() => this.deleteProducts(id)}
              ></i>
              <i class='far fa-edit'></i>
            </td>
          </tr>
        </tbody>
      </>
    )
  }
}
