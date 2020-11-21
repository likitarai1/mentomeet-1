/* The code is taken from MyProfile.js

frontend\src\components\Profile\MyProfile\MyProfile.js

 */
import { Container, Row, Col, Button, Card, Jumbotron } from 'react-bootstrap';


export default function Card({iam}){
	
  return(	
 <Container fluid id="faculty-main-content">
          <Row>
			<Col md={9}>
              <div id="main-content">
                <div id="background-container">
                  <Jumbotron id="background-jumbotron">
                    
                    <Card>
                      <Card.Header>
                        <h6 className="mb-0 font-weight-bold">My Details:</h6>
                      </Card.Header>
                      {/* <Card.Title><h3>My Details:</h3></Card.Title> */}
                      <Card.Body>
                        <Row>
                          <Col className="text-left" md={6}>
                            <p className="font-weight-bold"> College: <span className="small">{this.state.college} </span></p>
                            <p className="font-weight-bold"> College_type: <span className="small">{this.state.college_type}</span></p>
                            <p className="font-weight-bold"> Branch: <span className="small">{this.state.branch} </span></p>
                            <p className="font-weight-bold"> Year: <span className="small">{this.state.year}</span></p>
                            <p className="font-weight-bold"> JEE Rank: <span className="small"> <Badge color="success">{this.state.rank}</Badge></span></p>
                          </Col>
                          <Col className="text-left">
                            <p className="font-weight-bold"> Expertise: <span className="small">{this.state.expertise}</span></p>
                            <p className="font-weight-bold"> Online Start time: <span className="small">{this.state.start_time} </span></p>
                            <p className="font-weight-bold"> Online End_time: <span className="small">{this.state.end_time} </span></p>
                            <div>
                              <h6 className="font-weight-bold">Social Links:</h6>
                              <div className="d-flex justify-conten-between">
                                <p className="font-weight-bold"> <a href={this.state.fb_link} target="_blank">Facebook</a></p>
                                <p className="ml-3 font-weight-bold"> <a href={this.state.linkedin_link} target="_blank">Linkedin </a></p>
                              </div>
                            </div>  
                          </Col>
                        </Row>
                        <div className="text-left">
                          <p className="font-weight-bold mb-1"> About Me : </p>
                          <p>{this.state.about_me}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Jumbotron>
                </div>
              </div>
            </Col>
           </Row>
			)
}

