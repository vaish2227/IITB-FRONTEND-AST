import axios from "axios";
const COURSES_INSTANCE_API_BASE_URL = "http://localhost:8080/api/instances/getcourseinstancelist";
// eslint-disable-next-line no-template-curly-in-string
const DELETE_URL = "http://localhost:8080/api/instances/deletecourseinstance/${year}/${semester}/${courseInstanceId}"
class ListCourseInstanceService {
  getCourseInstance() {
    return axios.get(COURSES_INSTANCE_API_BASE_URL);
  }

  deleteCourseInstance(year, semester, courseInstanceId) {
    const DELETE_URL = `http://localhost:8080/api/instances/deletecourseinstance/${year}/${semester}/${courseInstanceId}`;
    
    // Send a DELETE request to the server
    return axios.delete(DELETE_URL)
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
