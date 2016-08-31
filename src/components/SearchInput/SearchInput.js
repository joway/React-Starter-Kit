import React, { Component } from 'react'
import { Input, Button, Row, Col } from 'antd'
import classNames from 'classnames'
const InputGroup = Input.Group

class SearchInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
    this.handleFocusBlur.bind(this)
    this.handleInputChange.bind(this)
    this.handleSearch.bind(this)
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleFocusBlur = (e) => {
    this.setState({
      focus: e.target === document.activeElement
    })
  }

  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value)
    }
  }

  render () {
    const { style, size, placeholder } = this.props
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim()
    })
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus
    })
    return (
      <InputGroup className={searchCls}>
        <Input placeholder={placeholder} value={this.state.value} onChange={this.handleInputChange}
               onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur}
               onPressEnter={this.handleSearch} style={style}
        />
        <div className='ant-input-group-wrap'>
          <Button icon='search' className={btnCls} size={size} onClick={this.handleSearch} style={style}/>
        </div>
      </InputGroup>
    )
  }
}

SearchInput.propTypes = {
  value: React.PropTypes.string.isRequired,
  focus: React.PropTypes.bool.isRequired
}
SearchInput.defaultProps = {
  value: '',
  focus: false
}

export default SearchInput
