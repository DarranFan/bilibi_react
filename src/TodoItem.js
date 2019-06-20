import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.delHandle = this.delHandle.bind(this)
  }

  shouldComponentUpdate(nextProps,nextState){
    //这个生命周期是当父组件更新的时候子组件也会更新 但是为了节约性能 可以用这个 shouldComponentUpdate 这个
    // 生命周期函数来控制 它有两个参数 当两个参数里 传过来的 值（这里的值就是指代父组件传过来的那个item） 不一致的时候就返回true 让子组件更新 否则不返回false 子组件不更新

    if(nextProps.item !== nextState.item){
      return true;
    }else{
      return false;
    }
  }
  render() {
    console.log('child -----render')
    const { item, test } = this.props
    return (
      <div onClick={this.delHandle}>
        {test} ---{item}
      </div>
    )
  }
  delHandle() {
    const { delhandler, index } = this.props
    delhandler(index)
  }
}
TodoItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
  delhandler: PropTypes.func,
  test: PropTypes.string.isRequired
}
TodoItem.defaultProps = {
  test: 'hello'
}
export default TodoItem
