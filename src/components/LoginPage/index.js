import {Component} from 'react'

import MeetContext from '../../MeetContext/MeetContext'
import './index.css'

class LoginPage extends Component {
  state = {registername: '', registerTopic: ''}

  onChangeUsername = event => {
    this.setState({registername: event.target.value})
  }

  onSetOption = event => {
    this.setState({registerTopic: event.target.value})
  }

  render() {
    return (
      <MeetContext.Consumer>
        {value => {
          const {
            setUserDets,
            topiclist,

            errmsg,
            setErrorMessageF,
          } = value

          const {history} = this.props

          const onSubmitUserDetails = event => {
            const {registerTopic, registername} = this.state
            event.preventDefault()

            if (registername === '') {
              setErrorMessageF('Please enter your name')
            } else if (registerTopic === '') {
              setErrorMessageF('select topic')
            } else {
              setUserDets({
                username: registername,
                topic: registerTopic,
                isLoggedIn: true,
              })
              history.replace('/')
            }
          }

          return (
            <div className="login-main-container">
              <div className="login-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register-image"
                />
              </div>
              <form onSubmit={onSubmitUserDetails}>
                <h1 className="login-main-heading">Let us join</h1>
                <div className="username-topic-container">
                  <label htmlFor="username" className="label">
                    NAME
                  </label>
                  <input
                    className="user-name-input"
                    id="username"
                    onChange={this.onChangeUsername}
                    placeholder="Your Name"
                  />
                </div>
                <div className="username-topic-container">
                  <label htmlFor="topics" className="label">
                    TOPICS
                  </label>
                  <select
                    className="select-options"
                    onChange={this.onSetOption}
                  >
                    {topiclist.map(eachOne => {
                      const {displayText, id} = eachOne
                      const onClickSelectOpiton = () => {
                        this.onSetOption(displayText)
                      }
                      return (
                        <option
                          key={id}
                          value={displayText}
                          onClick={onClickSelectOpiton}
                          className="option-item"
                        >
                          {displayText}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <button type="submit" className="register-now-btn">
                  Register Now
                </button>
                <p className="error-msg">{errmsg}</p>
              </form>
            </div>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}

export default LoginPage
