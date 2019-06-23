// import React from 'react'
// function App() {
//   return <div>hello world</div>
// }

// export default App

import React, { Component } from 'react'
import './style.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.changeShow = this.changeShow.bind(this)
  }
  changeShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hide'}>hello world</div>
        <button onClick={this.changeShow}>toggle</button>
      </div>
    )
  }
}
export default App
