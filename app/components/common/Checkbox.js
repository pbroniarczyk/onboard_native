import React, { Component } from 'react'
import { View, CheckBox, Text } from 'react-native';

// Assets
import { styles } from "./commonStyles";


export default class Checkbox extends Component {
    render() {
        console.log("new checkbox value")
        return (
            <View style={styles.checkbox}>
                <CheckBox
                    value={this.props.value}
                    onValueChange={this.props.onValueChange}
                />
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}
