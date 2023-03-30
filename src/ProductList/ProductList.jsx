import React, { Component } from 'react'
import ProducItem from './ProducItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ProductList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: '️🎈'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: '️️🏀'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: '️️🏈'
        }
      ]
    }
  }

  orderProductList = () => {
    this.setState((prevState) => ({
      ProductList: prevState.ProductList.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }))
  }

  addProduct = () => {
    this.setState((prevState) => ({
      ProductList: [
        {
          id: '4d',
          name: 'Huawei',
          avatar: '😍'
        },
        ...prevState.ProductList
      ]
    }))
  }

  render() {
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.orderProductList}>Order Prodcut List</button>
        <button onClick={this.addProduct}>Add Product</button>
        <div className='prodcut-list'>
          {this.state.ProductList.map((product, index) => (
            <ProducItem product={product} key={product.id} />
          ))}
          {this.state.ProductList.map((product, index) => (
            <ProducItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList
