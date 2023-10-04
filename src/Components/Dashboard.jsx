import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';  // Add your CSS for the sidebar styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseCreationForm from './CourseCreationForm';
import CourseInstanceForm from './CourseInstanceForm';
import ListCourseComponent from './ListCourseComponent';
import ListCourseInstanceComponent from './ListCourseInstanceComponent';
import WelcomePage from './WelcomePage';


const Dashboard = () => {
  const navigate = useNavigate();

  const redirectToCreateCourse = () => {
    navigate('/Createcourse');
  };

  const redirectToAddCourse = () => {
    navigate('/course-instance');
  };

  const redirectToListCourse = () => {
    navigate('/Listcourses');
  };

  const redirectToListCourseInstance = () => {
    navigate('/ListcourseInstance');
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Course_bg.jpg)`,
  };

  return (
    <div className='container'>
      <div className="sidebar">
        <button onClick={redirectToCreateCourse}>CREATE COURSES</button>
        <button onClick={redirectToAddCourse}>CREATE INSTANCE</button>
        <button onClick={redirectToListCourse}>LIST COURSES</button>
        <button onClick={redirectToListCourseInstance}>LIST INSTANCES</button>
      </div>
      <div className='content'>
      <Routes>
                <Route path="/ListcourseInstance" element={<ListCourseInstanceComponent/>} />
                <Route path="/Listcourses" element={<ListCourseComponent/>} />
                <Route path="/Createcourse" element={<CourseCreationForm/>} />
                <Route path="/course-instance" element={<CourseInstanceForm/>} />
                <Route path="/" element={<WelcomePage/>} />     
      </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
