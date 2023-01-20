import '../style/landingpage.css'
import {Card, Container, Row, Col, Image } from 'react-bootstrap'
import antImage from '../assets/superhero/antman.jpg'
import avangerImage from '../assets/superhero/avenger.jpg'
import batmanImage from '../assets/superhero/batman.jpg'
import robinhoodImage from '../assets/superhero/robinhood.jpg'
import spidermanImage from '../assets/superhero/spiderman-cover.jpg'
import supermanImage from '../assets/superhero/superman.jpg'

const SuperHero = () => {
    return (  
        <div>
            <Container>
                <h1 className='text-white mb-4'>SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={antImage} alt="Dune Movie" className="images"/>
                                    <Card.Title  className="text-center">Ant Man</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={avangerImage} alt="Every Thing Movie" className="images"/>
                                    <Card.Title  className="text-center">Avanger</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={batmanImage} alt="Infiniti Movie" className="images"/>
                                    <Card.Title  className="text-center">Batman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={robinhoodImage} alt="Joker Movie " className="images"/>
                                    <Card.Title  className="text-center">Robinhood</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={spidermanImage} alt="Light Year Movie" className="images"/>
                                    <Card.Title  className="text-center">Spiderman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={supermanImage} alt="Morbius Movie" className="images"/>
                                    <Card.Title  className="text-center">Superman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SuperHero;