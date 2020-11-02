import React, { Component } from 'react'

export class answerAlert extends Component {
    render() {
        return (
            <div>
                <p className={this.props.answer === this.props.correct ? "alert alert-success text-monospace" : "alert alert-danger text-monospace" }>
                  <b>{this.props.answer === this.props.correct ? "Correct, the answer is: "  : "Wrong, the correct answer is: " } { this.props.correct }</b>
                </p>
            </div>
        )
    }
}

export default answerAlert
