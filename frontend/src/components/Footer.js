import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row style={{ paddingTop: '1rem' }}>
          <Col xs={6} sm={6} md={6} lg={6} xl={3}>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                <a href='http://maps.google.com/?q=Monee, Illinois 60449'>
                  <p className='nav-icon'>
                    <i class='fas fa-map-marker-alt'></i>
                  </p>
                </a>
              </Col>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <p style={{ fontWeight: '600' }}>Address</p>
                <p style={{ fontWeight: '100', marginTop: '-1rem' }}>
                  Monee, Illinois
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xl={3}>
            <Row className='footer-contact'>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                <a href='callto:17089048915'>
                  <p className='nav-icon'>
                    <i className='fas fa-phone'></i>
                  </p>
                </a>
              </Col>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <p style={{ fontWeight: '600' }}>Phone</p>
                <p style={{ fontWeight: '100', marginTop: '-1rem' }}>
                  (224) 388-1409
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xl={3}>
            <Row>
              <Col xl={1} xs={1} sm={1} md={1} lg={1} xl={1}>
                <a href='mailto:sportsandsneakers2021@gmail.com'>
                  <p className='nav-icon'>
                    <i className='fas fa-envelope'></i>
                  </p>
                </a>
              </Col>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <p style={{ fontWeight: '600' }}>Email</p>
                <p style={{ fontWeight: '100', marginTop: '-1rem' }}>
                  juliaswildlife@gmail.com
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xl={3}>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                <p className='nav-icon'>
                  <i className='fas fa-clock'></i>
                </p>
              </Col>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <p style={{ fontWeight: '600' }}>Working Days/Hours</p>
                <p style={{ fontWeight: '100', marginTop: '-1rem' }}>
                  Mon-Sun/ 5am - 12am
                </p>
              </Col>
            </Row>
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
