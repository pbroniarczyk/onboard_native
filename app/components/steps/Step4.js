import React, { Component } from 'react';
import { Animated, Text, View, Button, TextInput } from 'react-native';

// Components
import ButtonWrapper from "../common/ButtonWrapper";

// Assets
import { styles } from "./stepsStyles";


const skills = [
    'JavaScript', 'CSS3', 'HTML', 'React', 'Python',
    'Sass', 'SQL', 'GraphQL', 'C++', 'Ruby', 'Redux',
    'Java', 'Bootstrap', 'Foundation', 'Flask',
    'TypeScript', 'Angular', 'Vue', 'NodeJS', 'Git',
    'Webpack', 'Gulp', 'Grunt'
];
const skillCloud = [...skills];

export default class Step4 extends Component { 
    constructor() {
        super();

        this.state = {
            fadeAnim: new Animated.Value(0),
            disabled: true,
            inputDisabled: false,
            skillCounter: 0,
            searchedSkill: "",
            skillArray: [] ,
            skillPlaceholder: [1, 2, 3, 4, 5, 6]
        }
    }

    checkDisabled = () => {
        console.log("CHECK DISABLED")
        const skillCover = document.querySelector('.skill-cloud');
        if (this.state.skillCounter === 6 && !skillCover.classList.contains('skill-cloud--disabled')) {
            this.setState({
                disabled: false,
                inputDisabled: true
            });
            skillCover.classList.add('skill-cloud--disabled');
        } else if (this.state.skillCounter !== 6 || skillCover.classList.contains('skill-cloud--disabled')) {
            this.setState({
                disabled: true,
                inputDisabled: false
            });
            skillCover.classList.remove('skill-cloud--disabled');
        }
    }

    selectSkill = (element, index) => {
        console.log("SELECT SKILL", element, index)
        const skillArray = [...this.state.skillArray];
        skillArray.push(element);
        this.setState({
            skillCounter: this.state.skillCounter + 1,
            skillArray
        });

        // let skillSelected = element,
        //     emptySkill = document.querySelectorAll('.skill--empty');
        // classHandler(emptySkill[0], skillSelected);
        // skillCloud.splice(index, 1)
    }

    removeSkill = event => {
        console.log("REMOVE SKILL")
        this.setState(
            {skillCounter: this.state.skillCounter - 1},
            // () => this.checkDisabled()
        );

        let skillFull = event.currentTarget;
        // classHandler(skillFull, '');
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
        this.props.userProfileUpdate(workObj);
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 400,
            }
        ).start(); 
	}
    
    render() {
        console.log("skill state", this.state)
        
		return (
			<View style={styles.step}>
				<Text style={styles.headline}>Umiejętności</Text>
                <Text style={styles.text}>Wyszukaj lub wybierz z listy najpopularniejszych główne umiejętności, które posiadasz.</Text>
                
                <View>
                    <View style={styles.autocomplete_wrapper}>
                        <TextInput
                            name="skill"
                            placeholder="Nazwa umiejętności"
                            style={styles.input}
                            onChangeText={(text) => this.setState({searchedSkill: text})}
                            value={this.state.searchedSkill} />
                        <Button
                            title="Dodaj"
                            style={styles.autocomplete_btn}
                            onPress={this.props.prevStep} />
                    </View>

                    <View style={styles.skill_cloud}>
                        {skillCloud.map((e,i) => <Text key={i} style={styles.skillcloud_item} onPress={this.selectSkill.bind(this, e, i)}>{e}</Text>)}
                    </View>

                    <View className="skill-counter">
                        <Text>Twoje umiejętności</Text>
                        <Text><Text className="skill-count">{this.state.skillCounter}</Text>/6</Text>
                    </View>

                    <View style={styles.skill_wrapper}> 
                        {
                            this.state.skillPlaceholder.map((skill, index) => 
                                <View
                                    key={index}
                                    onPress={() => this.removeSkill}
                                    style={
                                        this.state.skillArray[index] 
                                        ? styles.skill_full 
                                        : styles.skill} >

                                    <Text style={styles.addedSkill}>
                                        {this.state.skillArray[index]}
                                    </Text>
                                </View>
                            )
                        }
                    </View>

                </View>
                <ButtonWrapper 
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                />
			</View>
		);
	}
}
