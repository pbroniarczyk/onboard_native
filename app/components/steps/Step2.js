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
    }

    handleCheckbox = () => {
        
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
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {type: {employment: !prevState.employment}}}))}} label="Umowa o pracę" />
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {type: {b2b: !prevState.b2b}}}))}} label="B2B" />
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {type: {contractComission: !prevState.contractComission}}}))}} label="Umowa zlecenie" />
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {type: {contractWork: !prevState.contractWork}}}))}} label="Umowa o dzieło" />
                </View>
                <View>
                    <Text>Miejsce pracy</Text>
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {place: {stationary: !prevState.stationary}}}))}} label="Stacjonarnie" />
                    <Checkbox onChange={value => {this.setState((prevState) => ({work: {place: {remote: !prevState.remote}}}))}} label="Zdalnie" />
                </View>
                <ButtonWrapper 
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                />
			</View>
		);
	}
}
