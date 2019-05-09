const pads = [
  {
    id: 'Heater1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    text: 'Q'
  },
  {
    id: 'Heater2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    text: 'W'
  },
  {
    id: 'Heater3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    text: 'E'
  },
  {
    id: 'Heater4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    text: 'A'
  },
  {
    id: 'Header6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    text: 'S'
  },
  {
    id: 'DscOh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    text: 'D'
  },
  {
    id: 'KicknHat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    text: 'Z'
  },
  {
    id: 'RpKick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    text: 'X'
  },
  {
    id: 'CevH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    text: 'C'
  }
]

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    const sound = document.getElementById(this.props.pad.text);
    sound.play();
  }
  render() {
    return(
      <button onClick={this.play} type="button" class="drum-pad" id={this.props.pad.id}>{this.props.pad.text}
        <audio class="clip" src={this.props.pad.url} id={this.props.pad.text} />
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
