import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseCreationForm = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseDesc, setCourseDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCourse = {
      courseTitle: courseTitle,
      courseCode: courseCode,
      courseDesc: courseDesc,
    };

    axios.post('http://localhost:8080/api/courses/addcourse', newCourse)
      .then(response => {
        console.log('Course created successfully!', response.data);

        // Reset the form fields to their initial empty values
        setCourseTitle('');
        setCourseCode('');
        setCourseDescription('');

        // Show a success toast message
        toast.success('Course created successfully!', {
          position: 'top-right',
          autoClose: 3000, // Close the toast after 3 seconds
        });
      })
      .catch(error => {
        console.error('Error creating course:', error);
        // You can handle error actions here, like showing an error message.
      });
  };

  return (
    <div className="CourseCreationForm">
      <ToastContainer />
      <h1>Create a new course</h1>
      <div className="CourseFields">
        <form onSubmit={handleSubmit} className="CenterForm">
          <input
            type="text"
            placeholder="Course title"
            value={courseTitle}
            onChange={(event) => setCourseTitle(event.target.value)}
          />

          <input
            type="text"
            placeholder="Course code"
            value={courseCode}
            onChange={(event) => setCourseCode(event.target.value)}
          />

          <textarea
            placeholder="Course description"
            value={courseDesc}
            onChange={(event) => setCourseDescription(event.target.value)}
          />

          <button type="submit">Add course</button>
        </form>
      </div>
    </div>
  );
};

export default CourseCreationForm;
