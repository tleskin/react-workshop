let MenuItem = React.createClass({
  getDefaultProps(){
    return {
      isActive: false
    }
  },
  
  getInitialState(){
    let subMenuVisible = this.props.isActive ? true : false
    
    return {
      subMenuVisible: subMenuVisible,
      isHovering: false
    }
  },
  
  mouseOver() {
    this.setState({isHovering: true});
  },
  
  mouseOut() {
    this.setState({isHovering: false});
  },
  
  render() {
    let style = {
      fontWeight: this.state.subMenuVisible ? 'bold' : 'normal',
      color: this.state.isHovering ? 'green' : 'black'
    }
    
    return (
      <li style={style} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.name}
      </li>
    )
  }
});

module.exports = MenuItem