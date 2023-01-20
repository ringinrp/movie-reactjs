import '../style/landingpage.css'
import {Card, Container, Row, Col, Image } from 'react-bootstrap'
import duneImage from '../assets/tranding/dune.jpg'
import everythingImage from '../assets/tranding/everything.jpg'
import infinitiImage from '../assets/tranding/infinite.jpg'
import jokerImage from '../assets/tranding/joker.jpg'
import lightyearImage from '../assets/tranding/lightyear.jpg'
import morbiusImage from '../assets/tranding/morbius.jpg'

const Tranding = () => {
    return (  
        <div>
            <Container>
                <br />
                <h1 className='text-white mb-4'>TRANDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="tranding">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={duneImage} alt="Dune Movie" className="images"/>
                                    <Card.Title  className="text-center">Dune</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={everythingImage} alt="Every Thing Movie" className="images"/>
                                    <Card.Title  className="text-center">Every Thing</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={infinitiImage} alt="Infiniti Movie" className="images"/>
                                    <Card.Title  className="text-center">Infiniti</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={jokerImage} alt="Joker Movie " className="images"/>
                                    <Card.Title  className="text-center">Joker</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={lightyearImage} alt="Light Year Movie" className="images"/>
                                    <Card.Title  className="text-center">Light Year</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={morbiusImage} alt="Morbius Movie" className="images"/>
                                    <Card.Title  className="text-center">Morbius</Card.Title>
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

export default Tranding;