import React, { Component } from 'react'

export class finalScreen extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="mt-5 pb-4">Your final score is: {this.props.points}/10</h1>
                <button className="btn btn-primary" onClick = {this.props.handleRefresh}> Play Again</button>
            </div>
        )
    }
}

export default finalScreen
