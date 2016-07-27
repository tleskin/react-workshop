let MenuItem = require('./menu-item');

let SelectableGroup = React.createClass({
  getInitialState(){
    let subMenuVisible = this.props.isActive ? true : false
    
    return {
      subMenuVisible: subMenuVisible,
      activeMenu: this.props.activeMenu
    }
  },
  
  onClick(){
    this.setState({subMenuVisible: !this.state.subMenuVisible})
  },
  
  onActivate(key){
    this.setState({activeMenu: key})
  },
  
  render(){
    
    let style = {
      display: this.state.subMenuVisible ? 'none' : 'block'
    }
    
    let isMenuActive = this.state.activeMenu
    
    let onActivate = this.onActivate
    
    let newChildren = React.Children.map(this.props.children, function(child, index) {
      if(isMenuActive == index) {
        return React.cloneElement(child, { isActive: true, onActivate: onActivate, id: index })
      } else {
        return React.cloneElement(child, { isActive: false, onActivate: onActivate, id: index })
      }
    })
    
    return (
      <div>
        <h1 onClick={this.onClick}>Menu</h1>
        <ul style={style}>
          {newChildren}
        </ul>
      </div>
    )    
  }
});

module.exports = SelectableGroup;