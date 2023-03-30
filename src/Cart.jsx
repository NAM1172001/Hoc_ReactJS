import React from 'react'
import './cart.scss'
// import * as Styled from './Cart.style'
import styles from './cart.module.scss'

export default function Cart() {
  return (
    <div className='container'>
      Cart
      <div className={styles.cart}>
        <div className={styles.cartItem}>Item</div>
        <div className={styles.cartItem}>Item</div>
        <div className={styles.cartItem}>Item</div>
        <div className={styles.cartItem}>Item</div>
      </div>
    </div>
  )
}

export function Buttons({ isShow, className }) {
  return (
    <div className={className + ' button '}>
      <button className='button-item' style={{ backgroundColor: 'green', display: isShow ? 'inline-block' : 'none' }}>
        Cart
      </button>
    </div>
  )
}

// export default function Cart({ isShow }) {
//   return (
//     <Styled.ContainerExtends>
//       Cart
//       <Styled.StyleButton isShow={true} />
//     </Styled.ContainerExtends>
//   )
// }
