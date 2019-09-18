import React from 'react'
import DarkModeWrapper from './DarkModeWrapper'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

class App extends React.Component {
  state = {
    darkMode: false
  }

  handleToggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <DarkModeWrapper darkMode={this.state.darkMode}>
        <Header darkMode={this.state.darkMode} handleToggleDarkMode={this.handleToggleDarkMode} />
        <TweetsContainer />
      </DarkModeWrapper>
    )
  }
}

export default App