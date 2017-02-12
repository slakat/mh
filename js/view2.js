"use strict";

var _React = React;
var Component = _React.Component;
var Children = _React.Children;
var PropTypes = _React.PropTypes;
var _ReactMotion = ReactMotion;
var StaggeredMotion = _ReactMotion.StaggeredMotion;
var Motion = _ReactMotion.Motion;
var spring = _ReactMotion.spring;

//Circled

var Circled = React.createClass({
  displayName: "Circled",
  getInitialState: function getInitialState() {
    return { open: false, opacity: 1 };
  },
  handleMouseOver: function handleMouseOver() {
    this.setState({ open: !this.state.open });
  },
  handleTouchStart: function handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseOver();
  },
  getStyles: function getStyles(prevStyles) {
    var _this = this;

    // we're using the previous style to update the next ones placement
    var endValue = prevStyles.map(function (_, i) {
      var staggerStiff = 100,
          staggerDamp = 19;
      return i === 0 ? { opacity: spring(_this.state.open ? 0 : 1, { stiffness: staggerStiff, damping: staggerDamp }) } : { opacity: spring(_this.state.open ? 0 : 1, { stiffness: staggerStiff - i * 7, damping: staggerDamp + i * 0.2 }) };
    });
    return endValue;
  },
  render: function render() {
    var circNum = this.props.circNum || 5,
        classNum = this.props.classNum || "c1",
        circBk = this.props.circBk || "black",
        pathColor = this.props.pathColor || "#eaedef",
        settings = { stiffness: 200, damping: 20 };

    var pathData = ["M48.8,0A48.8,48.8,0,1,0,97.6,48.8,48.8,48.8,0,0,0,48.8,0Zm0,88.6A39.8,39.8,0,1,1,88.6,48.8,39.8,39.8,0,0,1,48.8,88.6Z", "M48.8,9.1A39.8,39.8,0,1,0,88.6,48.8,39.8,39.8,0,0,0,48.8,9.1Zm0,67.9A28.1,28.1,0,1,1,77,48.8,28.1,28.1,0,0,1,48.8,77Z", "M48.8,20.7A28.1,28.1,0,1,0,77,48.8,28.1,28.1,0,0,0,48.8,20.7Zm0,50.1a22,22,0,1,1,22-22A22,22,0,0,1,48.8,70.8Z", "M48.8,26.8a22,22,0,1,0,22,22A22,22,0,0,0,48.8,26.8Zm0,39.1A17.1,17.1,0,1,1,66,48.8,17.1,17.1,0,0,1,48.8,66Z", "M48.8,31.7A17.1,17.1,0,1,0,66,48.8,17.1,17.1,0,0,0,48.8,31.7Zm0,29A11.9,11.9,0,1,1,60.7,48.8,11.9,11.9,0,0,1,48.8,60.7Z", "M48.8,36.9A11.9,11.9,0,1,0,60.7,48.8,11.9,11.9,0,0,0,48.8,36.9Zm0,19.9a8,8,0,1,1,8-8A8,8,0,0,1,48.8,56.8Z", "M48.8,40.8a8,8,0,1,0,8,8A8,8,0,0,0,48.8,40.8Zm0,12.6a4.6,4.6,0,1,1,4.6-4.6A4.6,4.6,0,0,1,48.8,53.5Z", "M48.8,44.2a4.6,4.6,0,1,0,4.6,4.6A4.6,4.6,0,0,0,48.8,44.2Zm0,7.1a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,48.8,51.3Z", "M51.3 48.8c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5z"];

    var arr = [];
    for (var i = 0; i < pathData.length; i++) {
      arr.push({ opacity: 1 });
    }

    return React.createElement(
      "div",
      { onClick: this.handleMouseOver,
        onTouchStart: this.handleTouchStart,
        className: "circ-contain" },
      React.createElement("div", { className: "circ-lg" }),
      React.createElement(
        "div",
        { className: "circled back " + circBk },
        "Lorem Ipsum Dolor Sit"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "svg",
          { className: "circled circle-svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 97.6 97.6" },
          React.createElement(
            StaggeredMotion,
            {
              defaultStyles: arr,
              styles: this.getStyles },
            function (circ) {
              return React.createElement(
                "g",
                { fill: pathColor, className: "cPath" },
                circ.map(function (_ref, i) {
                  var opacity = _ref.opacity;
                  return React.createElement("path", {
                    key: i,
                    d: pathData[i],
                    className: "things s" + i,
                    style: {
                      opacity: opacity
                    } });
                })
              );
            }
          )
        ),
        React.createElement(
          Motion,
          { style: {
              op: spring(this.state.open ? 0 : 1, settings)
            } },
          function (_ref2) {
            var op = _ref2.op;
            return React.createElement(
              "div",
              { className: "circled front " + classNum,
                style: {
                  opacity: op
                } },
              React.createElement(
                "span",
                { className: "itals" },
                "Printed"
              ),
              React.createElement(
                "h1",
                null,
                circNum
              )
            );
          }
        )
      )
    );
  }
});

//App
var App = React.createClass({
  displayName: "App",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "pR" },
        React.createElement("div", { className: "stripe-vt" }),
        React.createElement("div", { className: "stripe-hz" })
      ),
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(ColumnOne, null),
          React.createElement(ColumnTwo, null),
          React.createElement(ColumnThree, null),
          React.createElement(ColumnFour, null)
        )
      )
    );
  }
});

//ColumnOne
var ColumnOne = React.createClass({
  displayName: "ColumnOne",
  render: function render() {
    return React.createElement(
      "div",
      { className: "column  col-xs-16 col-xs-offset-3 col-sm-8 col-sm-offset-2  col-md-8 col-md-offset-2" },
      React.createElement(Picture, null),
      React.createElement(Circled, null),
      React.createElement(PrintArea, { margin: "mt" }),
      React.createElement(Picture, { length: "short" })
    );
  }
});

//ColumnTwo
var ColumnTwo = React.createClass({
  displayName: "ColumnTwo",
  render: function render() {
    return React.createElement(
      "div",
      { className: "column  col-xs-16 col-xs-offset-2 col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-1" },
      React.createElement(Circled, { classNum: "c2", circNum: "36" }),
      React.createElement(Picture, { picNum: "2" }),
      React.createElement(Text, null)
    );
  }
});

//ColumnThree
var ColumnThree = React.createClass({
  displayName: "ColumnThree",
  render: function render() {
    return React.createElement(
      "div",
      { className: "column  col-xs-16 col-xs-offset-3 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2" },
      React.createElement(Circled, { classNum: "c3", circNum: "12" }),
      React.createElement(Picture, { length: "short", picNum: "2" }),
      React.createElement(PrintArea, null),
      React.createElement(Picture, { picNum: "3", margin: "mt" })
    );
  }
});

//ColumnFour
var ColumnFour = React.createClass({
  displayName: "ColumnFour",
  render: function render() {
    return React.createElement(
      "div",
      { className: "column  col-xs-16 col-xs-offset-2 col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-1" },
      React.createElement(Circled, { classNum: "c4", circNum: "2", circBk: "grey", pathColor: "black" }),
      React.createElement(Picture, { picNum: "4" }),
      React.createElement(Text, { grey: "grey" })
    );
  }
});

// Text
function Text(props) {
  var grey = props.grey || "sm-grey";

  return React.createElement(
    "div",
    { className: grey },
    React.createElement(
      "h2",
      null,
      "Lorem Ipsum"
    ),
    React.createElement(
      "p",
      null,
      "Man braid iPhone locavore hashtag pop-up, roof party forage heirloom chillwave brooklyn yr 8-bit gochujang blog. Gastropub locavore crucifix."
    ),
    React.createElement(
      "button",
      { className: "slide" },
      "See More ⟶"
    )
  );
}

// Picture
function Picture(props) {
  var picNum = props.picNum || 1,
      length = props.length || "long",
      margin = props.margin || "";

  return React.createElement("div", { className: length + " " + length + picNum + " " + margin });
}

// PrintArea
function PrintArea(props) {
  var margin = props.margin || "";

  return React.createElement(
    "div",
    { className: "printArea " + margin },
    React.createElement(
      "div",
      { className: "printrow" },
      React.createElement(
        "div",
        { className: "lg-top slide" },
        React.createElement(
          "span",
          { className: "itals" },
          "Date "
        ),
        "Picture"
      ),
      React.createElement(
        "div",
        { className: "sm-top slide" },
        "Picture"
      )
    ),
    React.createElement(
      "div",
      { className: "printrow" },
      React.createElement(
        "div",
        { className: "sm-bot slide" },
        React.createElement(
          "h3",
          null,
          "6"
        )
      ),
      React.createElement(
        "div",
        { className: "lg-bot" },
        React.createElement(
          "div",
          { className: "two-print-rows" },
          React.createElement(
            "div",
            { className: "first tr slide" },
            "Info"
          ),
          React.createElement(
            "div",
            { className: "tr slide" },
            React.createElement(
              "span",
              { className: "itals" },
              "Date "
            ),
            "Picture"
          )
        )
      )
    )
  );
}

React.render(React.createElement(App, null), document.querySelector("#app"));