console.log('App.js is running!');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;

var template = React.createElement(
  "h1",
  {id: "someid"},
  "something new"
)
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
