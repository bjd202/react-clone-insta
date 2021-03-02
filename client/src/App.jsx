import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Login from './Login'

function App() {
  const [LoginState, setLoginState] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')

    if(user === null){
      setLoginState(false)
    }else{
      setLoginState(true)
    }
  }, [])

  return (
    <div className="App">
      <Router>
        {LoginState === true ? <Header /> : <Login />}
      </Router>
    </div>
  );
}

export default App;
