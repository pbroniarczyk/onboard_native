import React, { Component } from 'react'
import { View, CheckBox, Text } from 'react-native';

// Assets
import { styles } from "./commonStyles";


export default class Checkbox extends Component {
    render() {
        return (
            <View style={styles.checkbox}>
                <CheckBox />
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}
