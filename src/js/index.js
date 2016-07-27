let MenuItem = require('./menu-item');

let Menu = React.createClass({
  getInitialState(){
    let subMenuVisible = this.props.isActive ? true : false
    
    return {
      subMenuVisible: subMenuVisible,
    }
  },
  
  onClick(){
    this.setState({subMenuVisible: !this.state.subMenuVisible})
  },
  
  render(){
    let style = {
      display: this.state.subMenuVisible ? 'none' : 'block'
    }
    
    return (
      <div>
        <h1 onClick={this.onClick}>Menu</h1>
        <ul style={style}>
          <MenuItem isActive={this.props.isActive} />
          <MenuItem />
        </ul>
      </div>
    )    
  }
});

ReactDOM.render( <Menu isActive={true} />, document.getElementById('app'));