import React from 'react'
import { Navbar, Image, Nav, Container } from 'react-bootstrap'

const Header = ({ match }) => {
  const fontColor = '#503c31'

  return (
    <Navbar expand='lg' className='nav'>
      <Navbar.Brand href='#home'>
        <Image src={require('./logo.png')}></Image>
        <h2 className='nav-title'>Julias Wildlife Rehabilitation</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <div></div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

//   <Image src={require('./Sports&Sneakers Title.png')}></Image>

/*
<Navbar collapseOnSelect expand='lg' className='nav'>
      <Container>
        <Image src={require('./logo.png')}></Image>
        <h2 className='nav-title'>Julias Wildlife Rehabilitation</h2>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
      </Container>
    </Navbar>





 <div className='nav-icons'>
          <a href='https://www.instagram.com/sportsandsneakers2021'>
            <i className='fab fa-youtube-square'></i>
          </a>
          <a href='https://www.instagram.com/sportsandsneakers2021'>
            <i className='fab fa-instagram-square'></i>
          </a>
          <a href='mailto:sportsandsneakers2021@gmail.com' className='icon'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </div>


<div className='nav-icons'>
          <Nav className='mr-auto' style={{ fontSize: '120%' }}>
            <Nav.Link
              href='/videos'
              className='nav-links'
              style={{ color: fontColor, fontSize: '1rem' }}
            >
              <i className='fas fa-video'></i> Videos
            </Nav.Link>
            <Nav.Link
              href='/pictures'
              className='nav-links'
              style={{ color: fontColor, fontSize: '1rem' }}
            >
              <i className='fas fa-image'></i> Pictures
            </Nav.Link>
            <Nav.Link
              href='/store'
              className='nav-links'
              style={{ color: fontColor, fontSize: '1rem' }}
            >
              <i className='fas fa-store'></i> Shop
            </Nav.Link>
          </Nav>
        </div>


*/
