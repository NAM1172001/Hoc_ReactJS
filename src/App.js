import { useState } from 'react'
import './App.css'
import BareButton from './BareButton'
import BareInput from './BareInput'
import Cart from './Header/Cart'
import Clock from './Clock'
import CorrectlySate from './CorrectlySate'
import Form from './Form/Form'
import UncontrolledComponent from './Form/UncontrolledComponent'
import Navigation from './Header/Navigation'
import Layout from './layout'
import LoginControl from './LoginControl'
import ProductList from './ProductList/ProductList'
// import RuleOfHook from './RuleOfHook'
import User from './User'
import Calculator from './Calculator/Calculator'
import FilterableProductTable from './ThinkinginReact/FilterableProductTable'

function App() {
  const [isShow, setIsShow] = useState(true)
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setName(FontFaceSetLoadEvent)}>hide Clock component</button>

      {visible && <Clock name={name} />} */}
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type='password' value='100' autoFocus className='input-control' onChange={() => {}} />
        <BareButton />
      </Layout> */}
      {/* <LoginControl hidden={false} /> */}
      {/* <CorrectlySate /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Cart isShow={true} /> */}

      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>Change IsShow</button> */}
      {/* <RuleOfHook /> */}
      {/* <Cart />
      <Navigation /> */}
      {/* <Calculator /> */}
      <FilterableProductTable />
    </div>
  )
}

export default App
