import React, { Component } from 'react';
import ListCourseInstanceService from '../services/ListCourseInstanceService';

class ListCourseInstanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseInstances: []
        }
    }

    componentDidMount() {
        this.refreshCourseInstances();
    }

    refreshCourseInstances() {
        ListCourseInstanceService.getCourseInstance().then((res) => {
            this.setState({ courseInstances: res.data });
        });
    }

    handleDeleteClick(year, semester, courseInstanceId) {
        // Call the delete API service and pass the year, semester, and course instance ID
        ListCourseInstanceService.deleteCourseInstance(year, semester, courseInstanceId).then(() => {
            // After successful deletion, refresh the course instance list
            this.refreshCourseInstances();
        });
    }

    render() {
        return (
            <div>
                <h3><span className="badge bg-secondary">List Courses</span></h3>
                <div className="row"></div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Course Year</th>
                                <th>Course Sem</th>
                                <th>Course Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.courseInstances.map((courseInstance) => (
                                <tr key={courseInstance.id}>
                                    <td>{courseInstance.courseId.courseTitle}</td>
                                    <td>{courseInstance.courseYear}</td>
                                    <td>{courseInstance.courseSem}</td>
                                    <td>{courseInstance.courseId.courseCode}</td>
                                    <td>
                                        {/* Add a delete button/icon and attach the onClick event */}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDeleteClick(courseInstance.courseYear, courseInstance.courseSem, courseInstance.id)}
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

export default ListCourseInstanceComponent;
