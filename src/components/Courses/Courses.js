import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [addCourse, setAddCourse] = useState([]);
    const handleAddCourse = (courseInfo) => {
        const newCourse = [...addCourse, courseInfo];
        setAddCourse(newCourse);
    }
    return (
        <div className="courses-container mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-7  order-1 order-md-0">
                        {
                            courses.map(course => <Course course={course} key={course.key} handleAddCourse={handleAddCourse}></Course>)
                        }
                    </div>
                    <div className="col-lg-3 col-md-5 order-0 order-md-1">
                        <div className="cart-container mt-5">
                            <Cart addCourse={addCourse}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;