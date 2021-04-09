import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import profilepic from '../images/profilepic.jpg'
import cookies from 'js-cookies'

const HomeScreen = () => {
  console.log(cookies.getItem('reviewSubmit'))
  return (
    <div className='content-div'>
      <Row className='content-home'>
        <Col sm={12} md={12} lg={6} xl={6}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5 className='homeTitle'>Hello, &nbsp; I'm Julia Olszewski!</h5>
              <br></br>
              <h5 className='homeHeading'>About Me: </h5>
              <p>
                In 2019 I decided to start my journey as a wildlife rehabber. I
                found out about wildlife rehabbing through the awesome
                organization The Safe Haven Wildlife Rehabilitation group. It
                was there I learned the necessary skills and what it takes to
                become a wildlife rehabber. In 2020 I was able to get my license
                and become an official licensed wildlife rehabber.
              </p>
              <br />

              <h5>Mission Statement </h5>
              <p>
                From the beginning our mission has been to rescue, rehabilitate,
                and release. We keep that mission in mind with every animal that
                comes through our door. We consider it a privilege to help the
                wildlife in the Will county and surrounding areas. As we
                continue to grow, we will always remind ourselves of the mission
                at hand.
              </p>
              <br />

              <h5>First step after finding wildlife</h5>
              <p>
                The first step in getting aid for any found wildlife is to keep
                the animal dry, warm, and out of harms way. We usually suggest a
                heating pad under a box on low. After ensuring this is taken
                care of contact a wildlife rehabber immediately. If I cannot
                answer the call right away, there is a link below to the other
                wildlife rehabbers in the area.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={6}>
          <Card className='profile-cards'>
            <Card.Body>
              <div
                className='line'
                style={{ marginTop: '-3rem', marginBottom: '3rem' }}
              ></div>
              <h5 style={{ margin: 'auto', textAlign: 'center' }}>
                Helpful Links
              </h5>
              <br></br>
              <ul>
                <li>
                  <a
                    className='helpful-links'
                    href='https://www.google.com/maps/d/viewer?mid=1dAP18bj5yL58fQfpx6N4EAx8llCYQqQT&ll=42.22859441941741%2C-88.21177369078482&z=7&fbclid=IwAR32LDjLEOw3oaHB1Itu455NxBiBUNuFHAx5NbMheQ-bj4lPP6qAOmQ47Yg'
                  >
                    Google Map of Illinois Wildlife Rehabbers
                  </a>
                </li>
                <br></br>
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
              <div className='line' style={{ marginTop: '3rem' }}></div>
            </Card.Body>
          </Card>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card className='profile-cards'>
              <Card.Body>
                <h5
                  style={{
                    marginTop: '3rem',
                    margin: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Donations
                </h5>
                <br></br>
                <p>
                  Being a not-for-profit we require the help from our community
                  to be able to keep doing what we love. All donations go
                  towards our animals. For any donations that are not through
                  amazon please contact us. Thank you!
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
                    <a href='https://www.amazon.com/hz/wishlist/ls/1NE09Z79KDBZL?ref_=wl_share&fbclid=IwAR2JXTTI1_Z-MoRupCS6ayu_1mPf300NR34tAr735cGdwdjV6sVbl-xwFsM'>
                      <h1 className='donation-amazon'>
                        <i className='fab fa-amazon'></i>
                      </h1>
                    </a>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <a href='https://www.facebook.com/groups/832540737321242/'>
                      <h1 className='donation-facebook'>
                        <i className='fab fa-facebook-square'></i>
                      </h1>
                    </a>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <a href='https://www.paypal.com/us/home'>
                      <h1 className='donation-paypal'>
                        <i className='fab fa-cc-paypal'></i>
                      </h1>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen

/*
<Col sm={12} md={6} lg={5} xl={4}>
          <Card className='profile-cards'>
            <Image className='profile-pic' src={profilepic}></Image>
          </Card>
        </Col>




 <div className='content-div'>
      <Row className='content-home'>
        <Col sm={12} md={6} lg={7} xl={6}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5 className='homeTitle'>Hello, &nbsp; I'm Julia Olszewski!</h5>
              <br></br>
              <h5 className='homeHeading'>About Me: </h5>
              <p>
                In 2019 I decided to start my journey as a wildlife rehabber. I
                found out about wildlife rehabbing through the awesome
                organization The Safe Haven Wildlife Rehabilitation group. It
                was there I learned the necessary skills and what it takes to
                become a wildlife rehabber. In 2020 I was able to get my license
                and become an official licensed wildlife rehabber.
              </p>
              <br />

              <h5>Mission Statement </h5>
              <p>
                From the beginning our mission has been to rescue, rehabilitate,
                and release. We keep that mission in mind with every animal that
                comes through our door. We consider it a privilege to help the
                wildlife in the Will county and surrounding areas. As we
                continue to grow, we will always remind ourselves of the mission
                at hand.
              </p>
              <br />

              <h5>First step after finding wildlife</h5>
              <p>
                The first step in getting aid for any found wildlife is to keep
                the animal dry, warm, and out of harms way. We usually suggest a
                heating pad under a box on low. After ensuring this is taken
                care of contact a wildlife rehabber immediately. If I cannot
                answer the call right away, there is a link below to the other
                wildlife rehabbers in the area.
              </p>
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
                  <a href='https://www.amazon.com/hz/wishlist/ls/1NE09Z79KDBZL?ref_=wl_share&fbclid=IwAR2JXTTI1_Z-MoRupCS6ayu_1mPf300NR34tAr735cGdwdjV6sVbl-xwFsM'>
                    <h1 className='donation-amazon'>
                      <i className='fab fa-amazon'></i>
                    </h1>
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href='https://www.facebook.com/groups/832540737321242/'>
                    <h1 className='donation-facebook'>
                      <i className='fab fa-facebook-square'></i>
                    </h1>
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href='https://www.paypal.com/us/home'>
                    <h1 className='donation-paypal'>
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
                    href='https://www.google.com/maps/d/viewer?mid=1dAP18bj5yL58fQfpx6N4EAx8llCYQqQT&ll=42.22859441941741%2C-88.21177369078482&z=7&fbclid=IwAR32LDjLEOw3oaHB1Itu455NxBiBUNuFHAx5NbMheQ-bj4lPP6qAOmQ47Yg'
                  >
                    Google Map of Illinois Wildlife Rehabbers
                  </a>
                </li>
                <br></br>
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


*/
