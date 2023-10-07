import axios from "axios";

const COURSES_API_BASE_URL="http://localhost:8080/api/";
class ListCourseService{
    getCourses(){
        return axios.get(`${COURSES_API_BASE_URL}courses/getcourselist`);
    }
    deleteCourse(courseId) {
        return axios.delete(`${COURSES_API_BASE_URL}courses/deletecourse/${courseId}`);
      }
}
export default new ListCourseService()