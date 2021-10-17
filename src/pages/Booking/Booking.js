import { useEffect, useState } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import TransparentHeader from '../shared/Header/TransparentHeader';
import './Booking.css';

const Booking = () => {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch('../Slider.json')
            .then(res => res.json())
            .then(data => setSlider(data))
            .catch(error => console.log(error));
    }, []);
    const { bookid } = useParams();
    const [activeSlider, setActiveSlider] = useState({});
    useEffect(() => {
        if (slider.length) {
            setActiveSlider(slider.find(slide => parseInt(slide.id) === parseInt(bookid)))
        }

    }, [slider, bookid]);
    const { name, description, coverImg } = activeSlider;
    return (
        <>
            <TransparentHeader />
            <div className="slider-container" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url(${coverImg})`, backgroundSize: 'cover', paddingTop: '250px', paddingBottom: '100px', minHeight: '110vh' }}>
                <Container>
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6">
                            <div className="slider-body text-light">
                                <h1>{name}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="offset-md-1 col-md-5">
                            <div className="booking-form p-4 bg-white rounded">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Origin</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" value="Dhaka" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control type="text" placeholder="Password" value={name} />
                                    </Form.Group>
                                    <Row>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>From</Form.Label>
                                                <Form.Control type="date" placeholder="Password" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>To</Form.Label>
                                                <Form.Control type="date" placeholder="Password" />
                                            </Form.Group>
                                        </div>
                                    </Row>

                                    <Button variant="warning" className="w-100  fw-bold" type="submit" >
                                        Start Booking
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>


                </Container>

            </div>


        </>
    );
};

export default Booking;