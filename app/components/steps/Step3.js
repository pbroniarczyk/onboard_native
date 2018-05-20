import React from 'react';
import { Animated, Text, View, Button, CheckBox, TouchableOpacity } from 'react-native';

// Components
import ButtonWrapper from "../common/ButtonWrapper";
import Checkbox from "../common/Checkbox";

// Assets
import { styles } from "./stepsStyles";
import availablePaths from '../../data/paths.json';


export default class Step3 extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
        checked: [false, false, false, false],
        paths: []
    }

    handleCheckPath = (element, index) => {
        const checkArray = this.state.checked,
              removed_elements = checkArray.splice(index, 1, !checkArray[index]);
        
        this.setState(() => ({
            checked: checkArray
        }));

        for (let i = 0; i < checkArray.length; i++) {
            let element = checkArray[i];

            if (element) return this.setState({ disabled: false });
            else this.setState({ disabled: true });
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
        const paths = [];
        this.state.checked.map((pathIsChecked, index) => {
            if(pathIsChecked) paths.push(availablePaths[index]);
        })

        this.props.userProfileUpdate({paths: [...paths]});
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
				<Text style={styles.headline}>Ścieżki kariery</Text>
                <Text style={styles.text}>Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.</Text>

                <View>
                    {this.state.checked.map((e,i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                style={this.state.checked[i] ? styles.path__checked : styles.path}
                                onPress={this.handleCheckPath.bind(this, e, i)}
                            >
                                <Text style={this.state.checked[i] ? styles.path__title_checked : styles.path__title}>{availablePaths[i].percentage + '%'}</Text>
                                <Text style={this.state.checked[i] ? styles.path__title_checked : styles.path__title}>{availablePaths[i].name}</Text>
                                <Checkbox label="" value={this.state.checked[i]}/>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <Text className="careerPath-desc">% osób wybiera tę ścieżkę</Text>

                <ButtonWrapper 
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                />
			</View>
		);
	}
}
