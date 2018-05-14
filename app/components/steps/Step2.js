import React from 'react';
import { Text, View, Button } from 'react-native';

// Assets
import { styles } from "./stepsStyles";


export default class Step2 extends React.Component {    
    render() {
        console.log("RENDER Step 2 === ", this.props.user);
		return (
			<View style={styles.step}>
				<Text style={styles.text}>{this.props.step}</Text>
                <Text style={styles.text}>Stanowisko: {this.props.user.position}</Text>
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
