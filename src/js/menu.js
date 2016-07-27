let MenuItem = require('./menu-item');

let Menu = React.createClass({
  getInitialState(){
    let subMenuVisible = this.props.isActive ? true : false
    
    return {
      subMenuVisible: subMenuVisible,
      activeMenu: 1,
    }
  },
  
  onClick(){
    this.setState({subMenuVisible: !this.state.subMenuVisible})
  },
  
  render(){
    let style = {
      display: this.state.subMenuVisible ? 'none' : 'block'
    }
    
    let items = [
      'Home',
      'Search',
      'About',
      'Contact'
    ]
    
    let activeMenu = this.state.activeMenu
    
    let menuItems = items.map(function(item, index) {
      if(activeMenu == index) {
        return <MenuItem isActive={true} key={index} name={item} />
      } else {
        return <MenuItem key={index} name={item} />
      }
    })
  
    return (
      <div>
        <h1 onClick={this.onClick}>Menu</h1>
        <ul style={style}>
          {menuItems}
        </ul>
      </div>
    )    
  }
});

module.exports = Menu;