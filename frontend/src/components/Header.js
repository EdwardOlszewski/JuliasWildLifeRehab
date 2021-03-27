import React from 'react'
import { Navbar, Image, Nav } from 'react-bootstrap'
import navImage from './logo.png'

const Header = ({ match }) => {
  return (
    <Navbar expand='lg' className='nav'>
      <Navbar.Brand href='/'>
        <Image className='header-img' src={navImage}></Image>

        <h2 className='nav-title'>Julias Wildlife Rehabilitation</h2>
        <h2 className='nav-title-mobile'>Julias Wildlife Rehab</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' variant='dark' />
      <Navbar.Collapse id='basic-navbar-nav' style={{ color: 'white' }}>
        <Nav className='mr-auto'></Nav>
        <Nav style={{ textAlign: 'left' }}>
          <Nav.Link href='/gallery'>
            <h6 className='nav-links'>
              <i className='far fa-images'></i> Gallery
            </h6>
          </Nav.Link>
        </Nav>
        <Nav style={{ textAlign: 'left' }}>
          <Nav.Link href='/reviews'>
            <h6 className='nav-links'>
              <i className='far fa-edit'></i>
              Reviews
            </h6>
          </Nav.Link>
        </Nav>
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
