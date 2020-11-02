import React, { Component } from 'react'

export class submitBtn extends Component {
    render() {
        return (
            <div className="text-center">
                <button className="btn btn-primary text-monospace" onClick={this.props.handleOnClick} >Submit Answer</button>
            </div>
        )
    }
}

export default submitBtn
