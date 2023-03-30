import React, { Component } from 'react'

export class ProducItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='prodcut-item'>
        <input />
        {product.name} - {product.avatar}
      </div>
    )
  }
}

export default ProducItem
