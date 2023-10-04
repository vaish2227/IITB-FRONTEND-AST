import axios from "axios";
const COURSES_API_BASE_URL="http://localhost:8080/api/courses/getcourselist";
const DELETE_COURSES_API="http://localhost:8080/api/courses/deletecourse";
class ListCourseService{
    getCourses(){
        return axios.get(COURSES_API_BASE_URL);
    }
    deleteCourse(courseId) {
        return axios.delete(`${DELETE_COURSES_API}/${courseId}`);
      }
}
export default new ListCourseService()