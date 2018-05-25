import React from 'react';

import './screen.css';


export default class Screen extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Make your Guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			currentGuess: null  //null for all input value types (you have to declare something)
		}
	}


	currentGuessChange(event){
		console.log(event.target.value);
		this.setState({
			currentGuess: event.target.value
		})
		console.log(this.state);
	}


	userGuesses(event){
		event.preventDefault();

		let guess = this.state.currentGuess;

		guess = parseInt(guess, 10);
		if(isNaN(guess)){
			this.setState({feedback: 'Please enter a valid number'});
			return;
		}if(guess < 1 || guess > 100){
			this.setState({feedback: 'Please enter a number betwee 1 and 100'});
			return;
		}


		const temp = Math.abs(guess-this.state.correctAnswer);

		let feedback;

	    if (temp >= 50) {
	      feedback = 'Ice Cold...';
	    } else if (temp >= 30) {
	      feedback = 'Cold...';
	    } else if (temp >= 10) {
	      feedback = 'Warm.';
	    } else if (temp >= 1) {
	      feedback = 'Hot!';
	    } else {
	      feedback = 'Correct!';
	    }

	    this.setState({
	      feedback,
	      guesses: [...this.state.guesses, guess]
	    });


	}


	render(){
    	const { feedback, guesses } = this.state;
    	console.log(guesses);
    	const guessCount = guesses.length;


		return(
			<div className="screen-container">
				<div className="feedback-container">
					<h2 className="feedback">{feedback}</h2>
				</div>
				<form>
					<div className="row">
						<div className="col-12">
							<input className="enter-guess" type="text" placeholder="Enter your Guess!" onChange={this.currentGuessChange.bind(this)}></input>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button className="guess-btn" onClick={this.userGuesses.bind(this)}>Guess!</button>
						</div>
					</div>	
				</form>

					<p className="guess-count">Guess &#35;<span className="count">{guessCount}</span></p>


					<ul className="guess-list">
					{guesses.join(', ')}
					</ul>

			</div>
		)
	}	
}