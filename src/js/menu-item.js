function MenuItem({isActive = false}) {
  let style = {
    fontWeight: isActive ? 'bold' : 'normal'
  }
  
  return (
    <li style={style}>Menu Item</li>
  )
}

module.exports = MenuItem