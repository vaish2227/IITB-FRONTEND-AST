import React from 'react';
import CourseCreationForm from './Components/CourseCreationForm';
import CourseInstanceForm from './Components/CourseInstanceForm';
import ListCourseComponent from './Components/ListCourseComponent';
import ListCourseInstanceComponent from './Components/ListCourseInstanceComponent';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <div className="App" >
      <div>
        <Router>
        <HeaderComponent />
        <Dashboard />
          <FooterComponent />
        </Router>
      </div>
    </div>
  );
};

export default App;
