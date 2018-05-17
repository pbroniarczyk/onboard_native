import React from 'react';
import { Text, View } from 'react-native';

// Components
import StepsContainer from "../steps/StepsContainer";

// Assets
import { styles } from "./boardStyle";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			step: 0,
			user: {
				mail: '',
				position: '',
				city: '',
				relocate: '',
				salary: '',
				experience: {
					total: '',
					last: ''
				},
				work: {
					type: {
						employment: false,
						contractWork: false,
						contractComission: false,
						b2b: false,
					},
					place: {
						stacionary: false,
						remote: false
					},
				},
				paths: [],
				skills: [],
	
			}
		};

		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.userProfileUpdate = this.userProfileUpdate.bind(this);
	}

	nextStep = () => {
		this.setState(() => ({ step: this.state.step + 1 }));
	}
	prevStep = () => {
		this.setState(() => ({ step: this.state.step - 1 }));
	}

	userProfileUpdate = data => {
		let currentState = this.state.user;
		let updatedState = Object.assign({}, currentState, data)
		this.setState(() => ({ user: updatedState }));
	}

	render() {
		console.log("USER === ", this.state.user);
        if(this.state.step !== 5) {
            return(
				<StepsContainer
					user={this.state.user}
					nextStep={this.nextStep} 
					prevStep={this.prevStep} 
					step={this.state.step} 
					userProfileUpdate={this.userProfileUpdate}
				/>
            )
        } else {
            return(
				<View>
					<Text>STEP 5</Text>
				</View>
            )
        }
    }
}
