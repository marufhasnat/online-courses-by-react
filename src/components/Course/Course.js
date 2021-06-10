import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, instructor, price, img } = props.course;
    return (
        <div className="row d-flex align-items-center">
            <div className="col-lg-4 col-md-12">
                <div className="img-container mt-5">
                    <img src={img} className="img-fluid" alt="course" />          
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="courses-container mt-5">
                    <h3>{name}</h3>
                    <h6>Instructor: {instructor}</h6>
                    <h5>Price: ${price}</h5>
                    <button className="btn" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>  
                </div>
            </div>
        </div>
    );
};

export default Course;
