let MenuItem = require('./menu-item');

function Menu (props) {
  return (
    <ul>
      <MenuItem isActive={props.isActive} />
      <MenuItem />
    </ul>
  )
}

ReactDOM.render( <Menu isActive={true} />, document.getElementById('app'));