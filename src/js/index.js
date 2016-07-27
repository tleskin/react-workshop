let MenuItem = require('./menu-item');
let SelectableGroup = require('./selectable-group');

let items = [
  'Home',
  'Search',
  'About',
  'Contact'
];

let menuItems = items.map(function(item, index) {
  return <MenuItem key={index} name={item} />
});

ReactDOM.render( <SelectableGroup children={menuItems} items={items} activeMenu={0} isActive={true} />, document.getElementById('app'));