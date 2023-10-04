import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span
                        onClick={() => window.open('https://github.com/gauravi26', '_blank', 'noopener,noreferrer')}
                        className="footer-link"
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        All Rights Reserved 2023 @GD
                    </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent