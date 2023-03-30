import { Buttons } from './Cart'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1px;
  padding-right: 1px;
`

export const ContainerExtends = styled(Container)`
  max-width: 1800px;
`

export const StyleButton = styled(Buttons)`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.blue ? 'blue' : 'red')};
`
