import React from 'react';
import { Text, View } from 'react-native';

// Components
import Step1 from "../steps/Step1";

// Assets
import { styles } from "./boardStyle";

export default class App extends React.Component {
	state = {
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

	nextStep() {
		console.log("TO STEP 2")
		this.setState({
		step: this.state.step + 1
		});
	}
	prevStep() {
		this.setState({
		step: this.state.step - 1
		});
	}

	userProfileUpdate(data) {
		let currentState = this.state.user;
		let updatedState = Object.assign({}, currentState, data)
		this.setState({ user: updatedState })
	}

	render() {
        if(this.state.step !== 5) {
            return(
                // <section className="board-section">
                //     <div className="board">
                //         <Cover
                //             user={this.state.user}
                //             step={this.state.step}
                //             prevStep={this.prevStep}
                //         />
                //         <Rocket appState={this.state.step} />
                //         <Steps 
                //             user={this.state.user}
                //             nextStep={this.nextStep} 
                //             prevStep={this.prevStep} 
                //             step={this.state.step} 
                //             userProfileUpdate={this.userProfileUpdate}
                //         />
                //     </div>
				// </section>
				<Step1 nextStep={this.nextStep.bind(this)} />
            )
        } else {
            return(
                // <section className="board-section">
                //     <div className="board">
                //         <Summary user={this.state.user} />
                //     </div>
				// </section>
				<View>
					<Text>STEP 5</Text>
				</View>
            )
        }
    }
}
