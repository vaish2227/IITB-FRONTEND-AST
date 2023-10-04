import axios from "axios";

const COURSES_API_BASE_URL = "http://localhost:8080/api/courses/addcourse";

class CourseService {
  addCourse(courseData) {
    // Send a POST request with the course data to the specified API endpoint
    return axios.post(COURSES_API_BASE_URL, courseData);
  }
}

export default new CourseService();
