import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Header
import Header from './components/Header'

// User Screens
import HomeScreen from './userScreens/HomeScreen'
import ReviewScreen from './userScreens/ReviewsScreen'

// Footer
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className='mainContainer'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/reviews' component={ReviewScreen} exact />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
