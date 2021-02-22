import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'

function App() {
  return (
    
      <div className="App">
        <Router>
          <Header />
        </Router>
      </div>
  );
}

export default App;
