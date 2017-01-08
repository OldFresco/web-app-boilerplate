import React, { Component } from 'react'

import WelcomePanel from './views/WelcomePanel'
import { connect } from 'react-redux'

class LandingPage extends Component {
  render () {
    return (
      <div>
        <WelcomePanel/>
      </div>
    )
  }
}

LandingPage.propTypes = {
  state: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    state: state
  }
}

export default connect(select)(LandingPage)
