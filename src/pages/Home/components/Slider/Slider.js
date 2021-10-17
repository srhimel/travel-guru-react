import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import './Slider.css';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useSlider from '../../../../hook/useSlider';

const Slider = () => {
    const [slider] = useSlider();
    const [activeId, setActiveId] = useState("1");
    const handleActiveSlide = (id) => {
        setActiveId(id);
    }

    const [myState, setMyState] = React.useState(1);
    // THE setState CALLS CAN BE ANYWHERE
    const changeCounter = (value) => {
        if (value === 'increment') {
            setMyState((prevState) => {
                if (prevState === 3) {
                    return 1
                }
                else {
                    return prevState + 1;
                }
            }
            )

        }
        else if (value === 'decrement') {
            setMyState((prevState) => {
                if (prevState === 1) {
                    return 3
                }
                else {
                    return prevState - 1;
                }
            })
        }
    }
    useEffect(() => {
        setInterval(() => changeCounter('increment'), 3000);
    }, [])
    useEffect(() => {

        if (slider.length) {
            const clickedSlide = slider.find(slide => parseInt(slide.id) === parseInt(myState));
            setActSlide(clickedSlide);
        }
    }, [slider, myState])
    const [actSlide, setActSlide] = useState({});
    useEffect(() => {
        if (slider.length) {
            const clickedSlide = slider.find(slide => slide.id === activeId);
            setActSlide(clickedSlide);
        }


    }, [slider, activeId]);
    const { name, description, coverImg, id } = actSlide;

    return (
        <>
            <div className="slider-container  " style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url(${coverImg})`, backgroundSize: 'cover', paddingTop: '200px', paddingBottom: '80px' }}>
                <Container>
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="slider-body text-light">
                                <h1>{name}</h1>
                                <p>{description}</p>
                                <Link className="btn btn-warning fw-bold px-4" to={'/book/' + id}>Booking <BsArrowRight /></Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="slider-navigation row mt-5">
                                {
                                    slider.map(slide => <Slide slide={slide} handleActiveSlide={handleActiveSlide} actSlide={actSlide} key={slide.id}></Slide>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center pt-5 gap-3">
                        <button className="rounded-pill btn btn-light py-2" onClick={() => changeCounter('decrement')}><BsChevronLeft></BsChevronLeft></button>
                        <button className="rounded-pill btn btn-light py-2" onClick={() => changeCounter('increment')} ><BsChevronRight></BsChevronRight></button>
                    </div>

                </Container>

            </div>


        </>
    );
};

export default Slider;