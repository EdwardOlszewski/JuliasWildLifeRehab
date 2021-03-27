import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const GalleryScreen = () => {
  return (
    <div className='content-div'>
      <Row className='content-home'>
        <Col sm={12} md={6} lg={5} xl={4}>
          <Card className='profile-cards'></Card>
        </Col>

        <Col sm={12} md={6} lg={7} xl={8}>
          <Card className='profile-cards'>
            <Card.Body>
              <h5>
                Under Construction! <i className='fas fa-hammer'></i>
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default GalleryScreen
