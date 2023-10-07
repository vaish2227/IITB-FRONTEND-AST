import React, { useEffect, useState } from 'react';
import { instanceService, getCourseList } from '../services/CreateInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseInstanceForm = () => {
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [courseYear, setCourseYear] = useState('');
  const [courseSem, setCourseSem] = useState('');
  const [courseList, setCourseList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCourse = {
      courseId: parseInt(selectedCourseId),
      courseYear: parseInt(courseYear),
      courseSem: parseInt(courseSem),
    };

    try {
      await instanceService(newCourse);

      // Reset the input fields
      setSelectedCourseId('');
      setCourseYear('');
      setCourseSem('');

      // Show a success toast message
      toast.success('Instance created successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error creating instance:', error);

      // Show an error toast message
      toast.error('Error creating instance. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const getList = async () => {
      const response = await getCourseList();
      setCourseList(response);
    };
    getList();
  }, []);

  return (
    <div className="CourseInstanceForm">
      <ToastContainer />
      <h1>Create a new Instance</h1>
      <div className="CourseFields">
        <form onSubmit={handleSubmit} className="CenterForm">
          <div className="select-course-field">
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
            >
              <option value="">Select Course</option>
              {courseList.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.courseTitle}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Year"
            value={courseYear}
            onChange={(event) => setCourseYear(event.target.value)}
          />

          <input
            type="text"
            placeholder="Semester"
            value={courseSem}
            onChange={(event) => setCourseSem(event.target.value)}
          />

          <button type="submit">Add instance</button>
        </form>
      </div>
    </div>
  );
};

export default CourseInstanceForm;
