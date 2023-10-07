import axios from "axios";

const COURSES_API_BASE_URL = "http://localhost:8080/api/";

// class CourseService {
//   addCourse(courseData) {
//     // Send a POST request with the course data to the specified API endpoint
//     return axios.post(COURSES_API_BASE_URL, courseData);
//   }
// }

// export default new CourseService();

const instanceService = async (data) => {
    const response = await axios.post(`${COURSES_API_BASE_URL}instances/addcourseinstance`, data);
    return response.data;
}

const getCourseList = async () => {
    const response = await axios.get(`${COURSES_API_BASE_URL}courses/getcourselist`);
    return response.data;
}

export { instanceService, getCourseList };