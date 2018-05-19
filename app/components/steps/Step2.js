import React from 'react';
import { Animated, Text, View, Button, CheckBox, TextInput } from 'react-native';

// Components
import ButtonWrapper from "../common/ButtonWrapper";
import Checkbox from "../common/Checkbox";

// Assets
import { styles } from "./stepsStyles";


export default class Step2 extends React.Component { 
    state = {
        fadeAnim: new Animated.Value(0),
        salary: "",
        employment: false,
        contractWork: false,
        contractComission: false,
        b2b: false,
        stacionary: false,
        remote: false
    }

    handleCheckbox = (name) => {
        this.setState((prevState) => ({
            [name]: !prevState[name]
        }))
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
        const work = {
            type: {
                employment: this.state.employment,
                contractWork: this.state.contractWork,
                contractComission: this.state.contractComission,
                b2b: this.state.b2b,
            },
            place: {
                stacionary: this.state.stacionary,
                remote: this.state.remote
            }
        };

        this.props.userProfileUpdate(work);
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 400,
            }
        ).start(); 
	}
    
    render() {
		return (
			<View style={styles.step}>
				<Text style={styles.headline}>Warunki współpracy</Text>
                <Text style={styles.text}>Zdecyduj, ile chcesz zarabiasz i określ warunki swojego zatrudnienia.</Text>
                <TextInput
                    name="salary"
                    placeholder="Minimalne oczekiwania finansowe (netto)"
                    style={styles.input}
                    onChangeText={salary => this.setState({ salary })}
                    value={this.props.user.salary ? this.props.user.salary : this.state.salary}
                />
                <View>
                    <Text>Forma zatrudnienia</Text>
                    <Checkbox label="Umowa o pracę" value={this.state.employment} onValueChange={this.handleCheckbox.bind(this, "employment")}/>
                    <Checkbox label="B2B" value={this.state.b2b} onValueChange={this.handleCheckbox.bind(this, "b2b")}/>
                    <Checkbox label="Umowa zlecnie" value={this.state.contractComission} onValueChange={this.handleCheckbox.bind(this, "contractComission")}/>
                    <Checkbox label="Umowa o dzieło" value={this.state.contractWork} onValueChange={this.handleCheckbox.bind(this, "contractWork")}/>
                </View>
                <View>
                    <Text>Miejsce pracy</Text>
                    <Checkbox label="Stacjonarnie" value={this.state.stationary} onValueChange={this.handleCheckbox.bind(this, "stationary")}/>
                    <Checkbox label="Zdalnie" value={this.state.remote} onValueChange={this.handleCheckbox.bind(this, "remote")}/>
                </View>
                <ButtonWrapper 
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                />
			</View>
		);
	}
}
