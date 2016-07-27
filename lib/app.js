function MenuItem() {
  return (
    React.createElement('ul', null, 
      React.createElement('li', null, 'Menu Item'),
      React.createElement('li', null, 'Menu Item')
    )
  )
}

ReactDOM.render( MenuItem(), document.getElementById('app'))