import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native';
export default class Home extends React.Component {
    static navigationOptions = { header: null };



      
    
    render() {
        return (
            <View >
                <Text>Allow will use your Camera </Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Login")}
                    title="Allow"
                    color="#841584"
                    
                />
            </View>
        );
    }
}

