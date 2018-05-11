import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SplashScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Onboard Native</Text>
				<Text>-- splashscreen --</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: "blue",
	}
});
