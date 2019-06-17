import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.delHandle = this.delHandle.bind(this)
  }
  render() {
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
