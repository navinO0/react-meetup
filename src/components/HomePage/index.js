import {Link} from 'react-router-dom'

import MeetContext from '../../MeetContext/MeetContext'
import './index.css'

const HomePage = () => (
  <MeetContext.Consumer>
    {value => {
      const {userDets} = value

      const {username, topic, isLoggedIn} = userDets

      return (
        <div className="home-main-container">
          <div className="home-sub-container">
            {!isLoggedIn ? (
              <div className="register-content-container">
                <h1 className="un-register-home-heading">Welcome to meetup</h1>
                <p className="un-register-home-description">
                  Please register for the topic
                </p>
                <Link to="/register">
                  <button type="button" className="register-now-btn">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="registered-main-container">
                <p className="registered-username">{`Hello ${username}`}</p>
                <p className="registered-topic">{`Welcome to ${topic}`}</p>
              </div>
            )}

            <div className="meet-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meet-image"
              />
            </div>
          </div>
        </div>
      )
    }}
  </MeetContext.Consumer>
)

export default HomePage
