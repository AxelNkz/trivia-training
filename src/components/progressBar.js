import React, { Component } from 'react'

export class progressBar extends Component {
    render() {
        return (
            <div className="progress progress-striped active mt-5">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:this.props.counter*10+"%"}}></div>
            </div>
        )
    }
}

export default progressBar
