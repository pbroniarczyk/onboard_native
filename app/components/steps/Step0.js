import React from 'react';
import { Animated, Text, View, Button, Image } from 'react-native';

// Assets
import { styles } from "./stepsStyles";
import astro from "../../assets/images/astro.png";


export default class Step0 extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount = () => {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 700,              // Make it take a while
            }
        ).start();                        // Starts the animation
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
            <Animated.View                 // Special animatable View
                style={{
                    flex: 1,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                <View style={styles.step}>
                    <Image source={astro} />
                    <View>
                        <Text style={styles.heading}>Witaj w BlueDot!</Text>
                        <Text style={styles.text}>Aby otrzymać spersonalizowane zaproszenia od pracodawców oraz statystyki dotyczące twojej pozycji na rynku uzupełnij brakujące rubryki</Text>
                    </View>
                    <Button 
                        title="Next"
                        onPress={this.props.nextStep}
                        />
                </View>
            </Animated.View>
		);
	}
}
