import React, { Component, Fragment } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const { productList } = this.props
    console.log(productList)

    let lastCategory = null

    const rows = productList.map((productItem) => {
      if (productItem.category !== lastCategory) {
        lastCategory = productItem.category
        return (
          <Fragment key={productItem.name}>
            <ProductCategoryRow category={productItem.category} />
            <ProductRow product={productItem} />
          </Fragment>
        )
      }
      return <ProductRow key={productItem.name} product={productItem} />
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ProductTable
