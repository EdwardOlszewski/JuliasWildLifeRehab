import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Header
import Header from './components/Header'

// User Screens
import HomeScreen from './userScreens/HomeScreen'

// Footer
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className='mainContainer'>
          <Route path='/' component={HomeScreen} exact />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
