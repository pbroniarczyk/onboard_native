import React from 'react';
import { Animated, Text, View, TextInput, Slider, Switch } from 'react-native';

// Components
import ButtonWrapper from "../common/ButtonWrapper";

// Assets
import { styles } from "./stepsStyles";


export default class Step1 extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
        position: "",
        city: "",
        relocate: false,
        experience: {
            total: 0,
            last: 0
        }
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
        this.props.userProfileUpdate(this.state);
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
        console.log("RENDER Step 1 === ", this.props.user);
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
                        placeholder="Nazwa stanowiska"
                        style={styles.input}
                        onChangeText={(text) => this.setState({position: text})}
                        value={this.props.user.position ? this.props.user.position : this.state.position}
                    />
                    <TextInput
                        name="city"
                        placeholder="Miasto"
                        style={styles.input}
                        onChangeText={(text) => this.setState({city: text})}
                        value={this.props.user.city ? this.props.user.city : this.state.city}
                    />
                    <View style={styles.row}>
                        <Text>Możliwość relokacji</Text>
                        <Switch
                            value={this.props.relocate ? this.props.relocate : this.state.relocate}
                            onValueChange={value => {this.setState((prevState) => ({relocate: !prevState.relocate}))}}
                        />
                    </View>
                    <View>
                        <Text>Lata doświadczenie w zawodzie: {this.state.experience.total}</Text>
					    <Slider
                            minimumValue={0}
                            maximumValue={5}
                            step={1}
                            onValueChange={value => this.setState({experience: {...this.state.experience, total: value}})}
                        />
                    </View>
                    <View>
                        <Text>Staż w obecnym miejscu pracy: {this.state.experience.last}</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={5}
                            step={1}
                            onValueChange={value => this.setState({experience: {...this.state.experience, last: value}})}
                        />
                    </View>
                    
                    <ButtonWrapper 
                        nextStep={this.props.nextStep}
                        prevStep={this.props.prevStep}
                    />
				</View>
            </Animated.View>
		);
	}
}
