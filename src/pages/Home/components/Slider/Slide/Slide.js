import React from 'react';
import './Slide.css'

const Slide = (props) => {

    const actSlide = props.actSlide;
    const { name, id, profileImg } = props.slide;
    return (
        <div className="col-4">
            <span onClick={() => props.handleActiveSlide(id)}>
                {id === actSlide.id ? <div className="card card-active shadow-lg">
                    <img src={profileImg} alt="" />
                    <h4>{name}</h4>
                </div> : <div className="card shadow">
                    <img src={profileImg} alt="" />
                    <h4>{name}</h4>
                </div>}

            </span>


        </div>
    );
};

export default Slide;