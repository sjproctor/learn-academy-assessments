// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. */}
          onChange={ this.robot }
          {/* 5. */}
          value={ userInput }
        />

        <div>
          {/* 6. */}
          <GoodRobot
            {/* 7. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.
      <div>
        <h3>Good Robot</h3>
        {/* 9. */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
export default GoodRobot
