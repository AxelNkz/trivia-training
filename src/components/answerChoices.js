import React, { Component } from 'react'

export class answerChoices extends Component {

    render() {
        let key = 1;
        return (
            <div>
                <ul className="list-unstyled">
                    {
                        this.props.choices.map( i =>
                            <li className="p-3 pl-3 text-monospace" key={key++} > 
                            { 
                              !this.props.submitted ?
                            
                                <input className="form-check-input" type="radio"  name="answer" value={i} checked={this.props.answer === i} onChange= {this.props.handleChange}/> 
                                :
                                <input className="form-check-input" disabled="true" type="radio" name="answer" value={i} checked={this.props.answer === i} onChange= {this.props.handleChange}/>   
                            } 
                            <label className="form-check-label text-monospace" htmlFor="inlineCheckbox2">{i}</label>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default answerChoices
