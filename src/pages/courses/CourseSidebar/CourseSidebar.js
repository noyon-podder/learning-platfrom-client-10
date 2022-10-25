import React from 'react';
import { Link } from 'react-router-dom';
import './CourseSidebar.css';
const CourseSidebar = ({courses}) => {
    console.log(courses);
    return (
        <div className='border-left'>
            <h2>Our All Courses</h2>
           
           <div className="course-name">
            {
                courses.map(course => <Link key={course.id}><li>{course.title}</li></Link>)
            }
           </div>

        </div>
    );
};

export default CourseSidebar;