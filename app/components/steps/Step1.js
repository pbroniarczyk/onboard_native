import React from 'react';
import { Animated, Text, View, Button, TextInput } from 'react-native';

// Assets
import { styles } from "./stepsStyles";


export default class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0),
            position: "",
            city: ""
        }

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event, name) {
    //     this.setState(() => ({
    //         [name]: event.target.value
    //     }));
    // }

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
                    <Text style={styles.headline}>Twoje doświadczenie</Text>
					<Text style={styles.text}>Opowiedz, jakie masz doświadczenie i sprawdź swoje możliwości.</Text>
                    <TextInput
                        name="position"
                        style={styles.input}
                        onChangeText={(text) => this.setState({position: text})}
                        value={this.state.position}
                    />
                    <TextInput
                        name="city"
                        style={styles.input}
                        onChangeText={(text) => this.setState({city: text})}
                        value={this.state.city}
                    />
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
