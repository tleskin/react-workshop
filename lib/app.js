(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');
var Menu = require('./menu');

ReactDOM.render(React.createElement(Menu, { isActive: true }), document.getElementById('app'));

},{"./menu":3,"./menu-item":2}],2:[function(require,module,exports){
'use strict';

var MenuItem = React.createClass({
  displayName: 'MenuItem',
  getDefaultProps: function getDefaultProps() {
    return {
      isActive: false
    };
  },
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
  render: function render() {
    var style = {
      fontWeight: this.state.subMenuVisible ? 'bold' : 'normal',
      color: this.state.isHovering ? 'green' : 'black'
    };

    return React.createElement(
      'li',
      { style: style, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
      this.props.name
    );
  }
});

module.exports = MenuItem;

},{}],3:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');

var Menu = React.createClass({
  displayName: 'Menu',
  getInitialState: function getInitialState() {
    var subMenuVisible = this.props.isActive ? true : false;

    return {
      subMenuVisible: subMenuVisible,
      activeMenu: 1
    };
  },
  onClick: function onClick() {
    this.setState({ subMenuVisible: !this.state.subMenuVisible });
  },
  render: function render() {
    var style = {
      display: this.state.subMenuVisible ? 'none' : 'block'
    };

    var items = ['Home', 'Search', 'About', 'Contact'];

    var activeMenu = this.state.activeMenu;

    var menuItems = items.map(function (item, index) {
      if (activeMenu == index) {
        return React.createElement(MenuItem, { isActive: true, key: index, name: item });
      } else {
        return React.createElement(MenuItem, { key: index, name: item });
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
        menuItems
      )
    );
  }
});

module.exports = Menu;

},{"./menu-item":2}]},{},[1]);
