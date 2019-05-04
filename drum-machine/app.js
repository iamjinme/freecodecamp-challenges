class Display extends React.Component {
  render() {
    return(
      <div id="display">Drum Machine!</div>
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
