import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSidebar from "../../courses/CourseSidebar/CourseSidebar";
import CourseWrapper from "../../courses/CourseWrapper/CourseWrapper";
import "./CoursePackage.css";
const CoursePackage = () => {
  const courses = useLoaderData();
  return (
    <div className="container">
      <h2 className="course-header mb-4">
        We found{" "}
        <span className="h3 course-count"> {courses.length} courses</span>{" "}
        courses available for you
      </h2>

      <div className="course-page">
        <Row>
          <Col lg={9}>
            <Row className="gy-4">
              {courses.map((course) => (
                <CourseWrapper key={course.id} course={course}></CourseWrapper>
              ))}
            </Row>
          </Col>
          <Col lg={3}>
            <CourseSidebar courses={courses}></CourseSidebar>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CoursePackage;
