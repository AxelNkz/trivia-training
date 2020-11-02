import './App.css';
import React from 'react'
import trivia from './Apprentice_TandemFor400_Data.json';
import TopBar from './components/topBar'
import ProgressBar from './components/progressBar'
import AnswerAlert from './components/answerAlert';
import AnswerChoices from './components/answerChoices';
import FinalScreen from './components/finalScreen';
import SubmitBtn from './components/submitBtn';
import NextBtn from './components/nextBtn';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      randomQuestion: {
        question: "",
        incorrect: [],
        correct: ""
      },
      counter: 1,
      points: 0,
      answer: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount(){
   
    const quesionListLength = trivia.length; // length of questions list
    const randomNum1 = Math.floor(Math.random() * (quesionListLength)); // random number to pick a question
    const incorrectListLength = trivia[randomNum1].incorrect.length // length of incorrect answers for a particular question
    const randomNum2 = Math.floor(Math.random() * (incorrectListLength)); // random number to insert correct answer in choices list
    
    
    const randomQuestion = trivia[randomNum1] // copy question in object
    randomQuestion.incorrect.splice(randomNum2, 0, trivia[randomNum1].correct); // insert correct answer in choices list
    trivia.splice(randomNum1,1); // remove question from JSON file
    this.setState({randomQuestion: randomQuestion }) // initialize state of randomQuestion


  }


  handleSubmit(event){
    event.preventDefault()

    // update points when answer is correct
    if (this.state.answer === this.state.randomQuestion.correct){
      this.setState({ points: this.state.points + 1 })
    }

    const quesionListLength = trivia.length; // length of questions list
    const randomNum1 = Math.floor(Math.random() * (quesionListLength)); // random number to pick a question
    const incorrectListLength = trivia[randomNum1].incorrect.length // length of incorrect answers for a particular question
    const randomNum2 = Math.floor(Math.random() * (incorrectListLength)); // random number to insert correct answer in choices list
    
    const randomQuestion = trivia[randomNum1] // copy new question in object
    randomQuestion.incorrect.splice(randomNum2, 0, trivia[randomNum1].correct); // insert correct answer in choices list
    trivia.splice(randomNum1,1); // remove question from JSON file 
    this.setState({ randomQuestion: randomQuestion}) // initialize state of randomQuestion
    this.setState({ counter: this.state.counter + 1 }) // increase counter
    this.setState({ submitted: false }); // change submitted sate to false
    this.setState({ answer: '' }); // reset answer state to empty string
  }

  handleChange(event){
    // update input state
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnClick(event){
    this.setState({ submitted: true }); // change submitted sate to true
  }

  handleRefresh(event){
    window.location.reload(); // refresh browser
  }


  render(){
    return (
    <div>
      <TopBar score={this.state.points}/>
      <div className="container">
        <div style={{margin: "auto", width:"700px", height:"700px", border:"solid 5px", borderColor:"#343a40"}} className="mt-5">
          <div className="row p-4">
            <div className="col-lg-12">
              { 
                this.state.counter === 11 ?
                
                // display final screen
                <FinalScreen points={this.state.points} handleRefresh={this.handleRefresh} />

                : // or

                // display questions
                <div>
                  <form onSubmit = {this.handleSubmit}>
                    <ProgressBar counter={this.state.counter}/>
                    <h1 className="mt-5 text-center pb-3 text-monospace">{ this.state.randomQuestion.question }</h1> 
                    { this.state.submitted ? <AnswerAlert correct={this.state.randomQuestion.correct} answer={this.state.answer} /> : "" }
                    <AnswerChoices choices={this.state.randomQuestion.incorrect} submitted={this.state.submitted} answer={this.state.answer} handleChange={this.handleChange}/>
                    { !this.state.submitted && (this.state.answer !== '') ? <SubmitBtn handleOnClick={this.handleOnClick}/> : "" }
                    { this.state.submitted ?  <NextBtn/>  :  "" }  
                  </form>
                </div>   
              }
           </div>
         </div>
       </div>
      </div>
    </div>
    );
  }
}

export default App;
