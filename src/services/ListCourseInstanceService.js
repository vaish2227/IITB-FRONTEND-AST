import axios from "axios";
const COURSES_API_BASE_URL = "http://localhost:8080/api/";
// eslint-disable-next-line no-template-curly-in-string
class ListCourseInstanceService {
  getCourseInstance() {
    return axios.get(`${COURSES_API_BASE_URL}instances/getcourseinstancelist`);
  }

  deleteCourseInstance(year, semester, courseInstanceId) {
    
    // Send a DELETE request to the server
    return axios.delete(`${COURSES_API_BASE_URL}instances/deletecourseinstance/${year}/${semester}/${courseInstanceId}`)
      .then((response) => {
        // Handle success if needed
        return response.data; // You can return data if the API sends a response
      })
      .catch((error) => {
        // Handle errors if the DELETE request fails
        throw error; // You can throw an error or handle it as needed
      });
  }

}
export default new ListCourseInstanceService();
