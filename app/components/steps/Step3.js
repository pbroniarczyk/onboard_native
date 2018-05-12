import React from 'react';
import { Text, View, Button } from 'react-native';

// Assets
import { styles } from "./stepsStyles";


export default class Step3 extends React.Component {
	render() {
		return (
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
		);
	}
}
