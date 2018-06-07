import React, { Component, Fragment} from 'react';
import { Header, Footer} from './Layouts/index.js';
import {muscles, exercises}  from '../store.js';


export default class extends Component {
	state = {
		exercises
	}



getExercisesByMuscles() {
	return this.state.exercises.reduce((exercises, exercise) => {
		const { muscles } = exercise;

	exercises[muscles] = exercises[muscles]
		? [...exercises[muscles], exercise]
		: [exercise]
	return exercises;
	}, );
}





	render() {
		return <Fragment>
			<Header />

			<exercises 


			/>
			
			<Footer
				muscles/>
		</Fragment>
	}
}