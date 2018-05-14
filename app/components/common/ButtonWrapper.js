import React, { Component } from 'react'
import { View, Button } from 'react-native';

// Assets
import { styles } from "./commonStyles";


export default class ButtonWrapper extends Component {
    render() {
        return (
            <View style={styles.buttonWrapper}>
                <Button 
                    title="Previous"
                    onPress={this.props.prevStep}
                />
                <Button 
                    title="Next"
                    onPress={this.props.nextStep}
                />
            </View>
        )
    }
}
