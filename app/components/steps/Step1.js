import React from 'react';
import { Animated, Text, View, Button } from 'react-native';

// Assets
import { styles } from "./stepsStyles";


export default class Step1 extends React.Component {
	state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount = () => {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 400,
            }
        ).start();
    }

    componentWillUnmount = () => {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 400,
            }
        ).start(); 
	}
	
	render() {
		let { fadeAnim } = this.state;

		return (
			<Animated.View
                style={{
					flex: 1,
                    opacity: fadeAnim,
                }}
            >
				<View style={styles.step}>
					<Text style={styles.text}>{this.props.step}</Text>
					<Button 
						title="Next"
						onPress={this.props.nextStep}
					/>
					<Button 
						title="Previous"
						onPress={this.props.prevStep}
					/>
				</View>
            </Animated.View>
		);
	}
}
