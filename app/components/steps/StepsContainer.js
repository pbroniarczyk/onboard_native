import React from 'react';
import { Text, View } from 'react-native';

// Components
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// Assets
import { styles } from "./stepsStyles";


export default class StepsContainer extends React.Component {
	render() {
        switch (this.props.step) {
            case 0:
                return(
                    <View style={styles.stepContainer}>
                        <Step0
                            nextStep={this.props.nextStep}
                            step={this.props.step}
                        />
                    </View>
                )

            case 1:
                return(
                    <View style={styles.stepContainer}>
                        <Step1
                            step={this.props.step}
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                        />
                    </View>
                )

            case 2:
                return(
                    <View style={styles.stepContainer}>
                        <Step2
                            step={this.props.step}
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                        />
                    </View>
                )

            case 3:
                return(
                    <View style={styles.stepContainer}>
                        <Step3
                            step={this.props.step}
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                        />
                    </View>
                )

            case 4:
                return(
                    <View style={styles.stepContainer}>
                        <Step4
                            step={this.props.step}
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                        />
                    </View>
                )

            case 5:
                return(
                    <View style={styles.stepContainer}>
                        <Step5
                            step={this.props.step}
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                        />
                    </View>
                )
        
            default:
                break;
        }
    }
}
