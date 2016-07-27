let MenuItem = require('./menu-item');

function Menu () {
  return (
    <ul>
      <MenuItem />
      <MenuItem />
    </ul>
  )
}

ReactDOM.render( <Menu />, document.getElementById('app'));