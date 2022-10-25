import React from 'react';
import { Link } from 'react-router-dom';
import './CourseSidebar.css';
const CourseSidebar = ({courses}) => {
    console.log(courses);
    return (
        <div className='bg-light p-3 pb-5'>
            <h2 className="sidebar-heading">Our All Courses</h2>
           
           <div className="course-name">
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><li>{course.title}</li></Link>)
            }
           </div>

        </div>
    );
};

export default CourseSidebar;