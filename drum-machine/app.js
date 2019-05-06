class Button extends React.Component {
  render() {
    return(
      <button>B</button>
    )
  }
}

class Display extends React.Component {
  render() {
    return(
      <p id="display">Drum Machine!</p>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div id="drum-machine">
        <Display />
      </div>
    )    
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
