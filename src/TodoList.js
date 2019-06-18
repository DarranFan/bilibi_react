import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './style.css' //这里一定要加后缀否则是会报错
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
    this.addList = this.addList.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.delhandler = this.delhandler.bind(this)
  }
  // 改变并获取输入框的值
  handleInput(e) {
    const val = e.target.value //因为注释的部分已经不提倡了改成了返回的函数方式，但是这个方式是异步的所以要提前定义出这个val 否则在下面使用val的时候会报错，另外最外层是()这种形式代表返回一个对象
    this.setState(() => ({ inputVal: val }))
    // this.setState({
    //   inputVal: e.target.value
    // })
  }
  // 添加事件
  addList() {
    // prevState 就相当于 this.state最好是用这个来代替this.state
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputVal],
        inputVal: ''
      }),
      () => {
        console.log(this.ul.querySelectorAll('div').length)
      }
    )
    // this.setState({
    //   list: [...this.state.list, this.state.inputVal],
    //   inputVal: ''
    // })
  }
  // 删除事件
  delhandler(index) {
    this.setState(prevState => {
      const list = prevState.list
      list.splice(index, 1)
      return { list }
    })
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
  }

  getTodoList() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          item={item}
          index={index}
          delhandler={this.delhandler}
          key={index}
        />
      )
    })
  }
  componentWillMount() {
    console.log('componentWillMount', '在render之前执行')
  }
  render() {
      console.log('render')
    return (
      <div>
        {/*  这是多行注释*/}
        {
          //这是单行注释
        }
        <div>
          <label htmlFor="insetArea">输入内容:</label>
          {/* 上面的htmlFor相当于普通html的for因为在react里如果要是用for的话会当成循环所以用htmlFor */}
          <input
            id="insetArea"
            className="input"
            value={this.state.inputVal}
            onChange={this.handleInput}
          />
          <button onClick={this.addList}>提交</button>
        </div>
        <ul
          ref={aa => {
            //两个aa相当于参数要保持一致 另外的那个ul不能变要根据是哪个元素就写哪个元素 例如如果是input就要写this.input
            this.ul = aa
          }}
        >
          {this.getTodoList()}
        </ul>
      </div>
    )
  }
}

export default TodoList;