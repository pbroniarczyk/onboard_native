import React from 'react';
import { Text, View, Button } from 'react-native';

// Assets
import { styles } from "./stepsStyles";


export default class Step1 extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>STEP 1</Text>
                <Button 
                    title="Next"
                    onPress={this.props.nextStep}
                />
			</View>
		);
	}
}
