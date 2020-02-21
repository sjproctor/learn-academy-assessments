// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. Setting up the state object with one key:value pair
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Updating the userInput key in state with whatever the user is typing into the input field, this method is called every time a DOM event occurs
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Destructures userInput from state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Calls the robot method every time a DOM event occurs */}
          onChange={ this.robot }
          {/* 5. Assigns the value of userInput from state to the input field so the user can see what they are typing in the form */}
          value={ userInput }
        />

        <div>
          {/* 6. Calls the GoodRobot component so it can be rendered on the page */}
          <GoodRobot
            {/* 7. Passes the userInput value from state to the GoodRobot component where it will be available as props */}
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
      // 8. This is the single JSX tag rendered by the GoodRobot component
      <div>
        <h3>Good Robot</h3>
        {/* 9. The userInput value passed by App is available to the GoodRobot component as props and is rendered in an h4 tag */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Makes the GoodRobot component available to be imported in App
export default GoodRobot
