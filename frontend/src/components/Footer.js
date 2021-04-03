import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const color = '#FFFFFF'

  return (
    <footer className='footer'>
      <Container style={{ textAlign: 'center', margin: 'auto' }}>
        <Row
          style={{ paddingTop: '1rem', textAlign: 'center', margin: 'auto' }}
        >
          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <div className='icon-div'>
              <a href='https://goo.gl/maps/hHZKnv3psC12brmC6'>
                <p className='nav-icon'>
                  <i className='fas fa-map-marker-alt' />
                </p>
                <p className='nav-icon-space'>s</p>
              </a>
              <p></p>
            </div>
            <div className='text-div'>
              <div className='footer-text'>
                <p style={{ color, fontWeight: '600' }}>Address</p>
                <p style={{ color, fontWeight: '100', marginTop: '-1rem' }}>
                  Monee, Illinois
                </p>
              </div>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <div className='icon-div'>
              <a href='callto:12243881409'>
                <p className='nav-icon'>
                  <i className='fas fa-phone' />
                </p>
                <p className='nav-icon-space'>s</p>
              </a>
            </div>
            <div className='text-div'>
              <div className='footer-text'>
                <p style={{ color, fontWeight: '600' }}>Phone</p>
                <p style={{ color, fontWeight: '100', marginTop: '-1rem' }}>
                  (224) 388-1409
                </p>
              </div>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <div className='icon-div'>
              <a href='mailto:juliaswildliferehab@gmail.com'>
                <p className='nav-icon'>
                  <i className='fas fa-envelope' />
                </p>
                <p className='nav-icon-space'>s</p>
              </a>
            </div>
            <div className='text-div'>
              <div className='footer-text'>
                <p style={{ color, fontWeight: '600' }}>Email</p>
                <p style={{ color, fontWeight: '100', marginTop: '-1rem' }}>
                  JuliasWildlifeRehab
                </p>
              </div>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <div className='icon-div'>
              <p className='nav-icon'>
                <i className='fas fa-clock' />
              </p>
              <p className='nav-icon-space'>s</p>
            </div>
            <div className='text-div'>
              <p style={{ color, fontWeight: '600' }}>Avaliability</p>
              <p style={{ color, fontWeight: '100', marginTop: '-1rem' }}>
                5am - 12am
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Julias Wildlife Rehabiliation
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
