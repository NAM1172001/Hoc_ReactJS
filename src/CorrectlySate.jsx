import React, { Component } from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
  })
export class CorrectlySate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    fetchComments().then((res) => {
      this.setState({
        comments: res
      })
    })
  }
  render() {
    console.log(this.state)
    return <div>CorrectlySate. Count: {this.state.count}</div>
  }
}

export default CorrectlySate
