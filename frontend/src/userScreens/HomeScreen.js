import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import profilepic from '../images/profilepic.jpg'
import cookies from 'js-cookies'

const HomeScreen = () => {
  console.log(cookies.getItem('reviewSubmit'))
  return (
    <div className='content-div'>
      <Row className='content-home'>
        <Col sm={12} md={6} lg={5} xl={4}>
          <Card className='profile-cards'>
            <Image className='profile-pic' src={profilepic}></Image>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={7} xl={8}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5>Hello, &nbsp; I'm Julia Olszewski!</h5>
              <br></br>
              <h6>About Me: </h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='content-home'>
        <Col sm={12} md={12} lg={6} xl={6}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5 style={{ margin: 'auto', textAlign: 'center' }}>Donations</h5>
              <br></br>
              <p>
                Being a not-for-profit we require the help from our community to
                be able to keep doing what we love. All donations go towards our
                animals. For any donations that are not through amazon please
                contact us. Thank you!
              </p>
              <h5
                style={{
                  margin: 'auto',
                  textAlign: 'center',
                  marginTop: '3rem',
                }}
              >
                Donation Links
              </h5>

              <Row className='donations'>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href='/'>
                    <h1 className='donation-icons' style={{ color: '#ff9400' }}>
                      <i className='fab fa-amazon'></i>
                    </h1>
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href='/'>
                    <h1 className='donation-icons' style={{ color: '#4268b3' }}>
                      <i className='fab fa-facebook-square'></i>
                    </h1>
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href='/'>
                    <h1 className='donation-icons' style={{ color: '#0070ba' }}>
                      <i className='fab fa-cc-paypal'></i>
                    </h1>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={6}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5 style={{ margin: 'auto', textAlign: 'center' }}>
                Helpful Links
              </h5>
              <br></br>
              <ul>
                <li>
                  <a
                    className='helpful-links'
                    href='https://www2.illinois.gov/dnr/LawEnforcement/Documents/IllinoisWildliferehabilitationList.pdf?fbclid=IwAR2D4VoGDF63yR3VJyBjtFYB8CtYKytAPAPHJIfDA0Vh55zSltpgnB2yC58'
                  >
                    List of Illinois Wildlife Rehabbers
                  </a>
                </li>
                <br></br>
                <li>
                  <a
                    className='helpful-links'
                    href='http://www.orphanedwildlifecare.com/'
                  >
                    Quick Information On Found Wildlife
                  </a>
                </li>
                <br></br>
                <li>
                  <a
                    className='helpful-links'
                    href='http://www.arcforwildlife.com/first.html'
                  >
                    List of Things To Do When First Found
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen

/*
<Row>
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card className='profile-cards'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23936.638773363942!2d-87.76439407382622!3d41.415785356389314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e11d80e4c6c57%3A0x623395c31ce554cc!2sMonee%2C%20IL%2060449!5e0!3m2!1sen!2sus!4v1615762861122!5m2!1sen!2sus'
              className='google-map'
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </Card>
        </Col>
      </Row>

*/
