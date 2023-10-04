import React, { useEffect, useState } from 'react';
import { instanceService, getCourseList } from '../services/CreateInstance';

const CourseInstanceForm = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(''); // State to manage the selected course
  const [courseYear, setCourseYear] = useState('');
  const [courseSem, setCourseSem] = useState('');

  const [courseList, setCourseList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new course object with the form data.
    const newCourse = {
      courseId: parseInt(selectedCourseId), // Use selectedCourseId here
      courseYear: parseInt(courseYear),
      courseSem: parseInt(courseSem),
    };

    await instanceService(newCourse);

    // Reset the input fields
    setSelectedCourseId(''); // Reset the selected course to empty
    setCourseYear('');
    setCourseSem('');
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
      <h1>Create a new Instance</h1>
      <div className="CourseFields">
        <form onSubmit={handleSubmit} className="CenterForm">
          {/* Dropdown (select) element for selecting a course */}
          <div className="select-course-field">
            <select
              value={selectedCourseId} // Use selectedCourseId as the value
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
