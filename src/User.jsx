import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import UserProfile from './UserProfile'

const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: 'Viet Nam',
    city: {
      street: '100 Xuan Thuy, Cau Giay',
      house: 'building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'New York',
        city: {
          street: '37 Nicolas, New York',
          house: 'building'
        }
      })
    }, 3000)
  })
}

// su dung default value
export const UserContext = createContext({
  address: {
    nation: 'New York',
    city: {
      street: '200 Los Angeles',
      house: 'building'
    }
  },
  firstName: 'Nam',
  Age: 23,
  increaseAge: () => {}
})

export default function User() {
  const [firstName] = useState('Alex')
  const [Age, setAge] = useState(24)
  const [, forceRerender] = useState(0)
  const [address, setAddress] = useState(initialAddress)

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const rerender = () => forceRerender((prevState) => prevState + 1)

  const changestreet = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '136 Dich Vong Hau'
      return { ...prevAddress, city: newCity }
    })
  }

  // useEffect(() => {
  //   console.log('UseEffect giong voi componentDidMount')
  //   getAddress().then((res) => {
  //     setAddress((prevAddress) => {
  //       const newAddress = { ...prevAddress }
  //       newAddress.city = res.city
  //       return newAddress
  //     })
  //   })

  //   // clean up function
  //   return () => {
  //     console.log('Huy goi API')
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('age', Age)

  //   // clean up function
  //   return () => {
  //     console.log('clean age')
  //   }
  // }, [Age])

  return (
    <div>
      <h1>User Functional Component</h1>
      <UserProfile />

      <button onClick={rerender}>Re-render</button>
      <button onClick={changestreet}>Change Street</button>
    </div>
  )
}
