let MenuItem = React.createClass({  
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
  
  changeOption(){
    this.props.onActivate(this.props.id)
  },
  
  render() {
    let style = {
      fontWeight: this.props.isActive ? 'bold' : 'normal',
      color: this.state.isHovering ? 'green' : 'black'
    }
    
    return (
      <li style={style} onClick={this.changeOption} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.name}
      </li>
    )
  }
});

module.exports = MenuItem