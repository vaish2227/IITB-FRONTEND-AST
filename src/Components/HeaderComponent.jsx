import React, { Component } from 'react';
import './styles.css'; // Import the CSS file

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a  className="navbar-brand"></a>
                        </div>
                        <div>
                            <h3> Course Application</h3> {/* Added heading */}
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
