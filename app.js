
console.log('Hello world');


// let par = <p>To jest par z React</p>

let par = React.createElement(
  'p',
  null,
  'To jest par z React'
);

let apka = document.getElementById('apka');

ReactDOM.render(par, apka);
