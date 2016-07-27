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
  
  mouseOver: function () {
    this.setState({isHovering: true});
  },
  
  mouseOut: function () {
    this.setState({isHovering: false});
  },
  
  render() {
    let style = {
      fontWeight: this.state.subMenuVisible ? 'bold' : 'normal',
      color: this.state.isHovering ? 'green' : 'black'
    }
    
    return (
      <li style={style} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        Menu Item
      </li>
    )
  }
});

module.exports = MenuItem