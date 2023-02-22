import React from 'react'

const MeetContext = React.createContext({
  userDets: {},
  setUserDets: () => {},
  topicList: [],
  errmsg: '',
  setErrorMessageF: () => {},
})

export default MeetContext
