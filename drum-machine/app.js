const pads = [
  {
    id: "description-Q",
    text: "Q"
  },
  {
    id: "description-W",
    text: "W"
  },
  {
    id: "description-E",
    text: "E"
  },
  {
    id: "description-A",
    text: "A"
  },
  {
    id: "description-S",
    text: "S"
  },
  {
    id: "description-D",
    text: "D"
  },
  {
    id: "description-Z",
    text: "Z"
  },
  {
    id: "description-X",
    text: "X"
  },
  {
    id: "description-C",
    text: "C"
  }
]

class Button extends React.Component {  
  render() {
    return(
      <button type="button" class="drum-pad" id={this.props.pad.id}>{this.props.pad.text}
        <audio class="clip" src="#" id={this.props.pad.text} />
      </button>
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
        { pads.map((pad) => {
          return(
            <Button key={pad.text} pad={pad}/>
          );
        })}
      </div>
    )    
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
