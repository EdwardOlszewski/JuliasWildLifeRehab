import React from 'react'
import { Card, ProgressBar, Row, Col } from 'react-bootstrap'

const StarBars = ({ reviews }) => {
  const countArray = [0, 0, 0, 0, 0, 0]
  const size = reviews.length

  for (let i = 0; i < reviews.length; i++) {
    let index = parseInt(reviews[i].numStars)
    countArray[index] += 1
  }

  return (
    <Card
      style={{
        border: 'none',
      }}
    >
      <h5> Stars </h5>
      <Row>
        <Col xs={3}>5 stars</Col>
        <Col xs={7}>
          <ProgressBar
            max={size}
            now={countArray[5]}
            style={{ marginTop: '5px' }}
          />
        </Col>
        <Col xs={1}>{countArray[5]}</Col>
      </Row>
      <Row>
        <Col xs={3}>4 stars</Col>
        <Col xs={7}>
          <ProgressBar
            max={size}
            now={countArray[4]}
            style={{ marginTop: '5px' }}
          />
        </Col>
        <Col xs={1}>{countArray[4]}</Col>
      </Row>
      <Row>
        <Col xs={3}>3 stars</Col>
        <Col xs={7}>
          <ProgressBar
            max={size}
            now={countArray[3]}
            style={{ marginTop: '5px' }}
          />
        </Col>
        <Col xs={1}>{countArray[3]}</Col>
      </Row>
      <Row>
        <Col xs={3}>2 stars</Col>
        <Col xs={7}>
          <ProgressBar
            max={size}
            now={countArray[2]}
            style={{ marginTop: '5px' }}
          />
        </Col>
        <Col xs={1}>{countArray[2]}</Col>
      </Row>
      <Row>
        <Col xs={3}>1 stars</Col>
        <Col xs={7}>
          <ProgressBar
            max={size}
            now={countArray[1]}
            style={{ marginTop: '5px' }}
          />
        </Col>
        <Col xs={1}>{countArray[1]}</Col>
      </Row>
    </Card>
  )
}

export default StarBars
