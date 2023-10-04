import React, { Component } from 'react';
import ListCourseService from '../services/ListCourseService';

class ListCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        ListCourseService.getCourses().then((res) => {
            this.setState({ courses: res.data });
        });
    }

    handleDeleteClick(courseId) {
        // Call the delete API service and pass the course ID
        ListCourseService.deleteCourse(courseId).then(() => {
            // After successful deletion, refresh the course list
            this.refreshCourses();
        });
    }

    render() {
        return (
            <div>
                <h3><span className="badge bg-secondary">List Courses</span></h3>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Course Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.courseTitle}</td>
                                    <td>{course.courseCode}</td>
                                    <td>
                                        {/* Add a delete button and attach the onClick event */}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDeleteClick(course.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCourseComponent;
