(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');
var SelectableGroup = require('./selectable-group');

var items = ['Home', 'Search', 'About', 'Contact'];

var menuItems = items.map(function (item, index) {
  return React.createElement(MenuItem, { key: index, name: item });
});

ReactDOM.render(React.createElement(SelectableGroup, { children: menuItems, items: items, activeMenu: 0, isActive: true }), document.getElementById('app'));

},{"./menu-item":2,"./selectable-group":3}],2:[function(require,module,exports){
'use strict';

var MenuItem = React.createClass({
  displayName: 'MenuItem',
  getInitialState: function getInitialState() {
    var subMenuVisible = this.props.isActive ? true : false;

    return {
      subMenuVisible: subMenuVisible,
      isHovering: false
    };
  },
  mouseOver: function mouseOver() {
    this.setState({ isHovering: true });
  },
  mouseOut: function mouseOut() {
    this.setState({ isHovering: false });
  },
  changeOption: function changeOption() {
    this.props.onActivate(this.props.id);
  },
  render: function render() {
    var style = {
      fontWeight: this.props.isActive ? 'bold' : 'normal',
      color: this.state.isHovering ? 'green' : 'black'
    };

    return React.createElement(
      'li',
      { style: style, onClick: this.changeOption, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
      this.props.name
    );
  }
});

module.exports = MenuItem;

},{}],3:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');

var SelectableGroup = React.createClass({
  displayName: 'SelectableGroup',
  getInitialState: function getInitialState() {
    var subMenuVisible = this.props.isActive ? true : false;

    return {
      subMenuVisible: subMenuVisible,
      activeMenu: this.props.activeMenu
    };
  },
  onClick: function onClick() {
    this.setState({ subMenuVisible: !this.state.subMenuVisible });
  },
  onActivate: function onActivate(key) {
    this.setState({ activeMenu: key });
  },
  render: function render() {

    var style = {
      display: this.state.subMenuVisible ? 'none' : 'block'
    };

    var isMenuActive = this.state.activeMenu;

    var onActivate = this.onActivate;

    var newChildren = React.Children.map(this.props.children, function (child, index) {
      if (isMenuActive == index) {
        return React.cloneElement(child, { isActive: true, onActivate: onActivate, id: index });
      } else {
        return React.cloneElement(child, { isActive: false, onActivate: onActivate, id: index });
      }
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { onClick: this.onClick },
        'Menu'
      ),
      React.createElement(
        'ul',
        { style: style },
        newChildren
      )
    );
  }
});

module.exports = SelectableGroup;

},{"./menu-item":2}]},{},[1]);
