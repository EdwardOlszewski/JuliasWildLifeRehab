import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Header
import Header from './components/Header'

// Admin Screens
import AdminLoginScreen from './adminScreens/AdminLoginScreen'

// User Screens
import HomeScreen from './userScreens/HomeScreen'
import ReviewScreen from './userScreens/ReviewsScreen'
import GalleryScreen from './userScreens/GalleryScreen'

// Footer
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className='mainContainer'>
          <Route path='/gallery' component={GalleryScreen} exact />
          <Route path='/reviews' component={ReviewScreen} exact />
          <Route
            path='/reviews/page/:pageNumber'
            component={ReviewScreen}
            exact
          />
          <Route path='/admin' component={AdminLoginScreen} exact />

          <Route path='/' component={HomeScreen} exact />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
