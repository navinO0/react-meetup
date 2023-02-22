import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import MeetContext from './MeetContext/MeetContext'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFoundPage'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
const App = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    topic: '',
    isLoggedIn: false,
  })
  const [errorMessage, setErrorMessage] = useState('')
  return (
    <MeetContext.Provider
      value={{
        userDets: userDetails,
        setUserDets: setUserDetails,
        topiclist: topicsList,
        errmsg: errorMessage,
        setErrorMessageF: setErrorMessage,
      }}
    >
      <>
        <div className="website-logo-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
            alt="website logo"
            className="website-logo"
          />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    </MeetContext.Provider>
  )
}

export default App
