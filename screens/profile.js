import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
export default class Profile extends React.Component {
    render() {
        return (
            <View >
                <Text>Eddited your profile</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Dashboard")}
                    title="back to dashboard"
                    color="#841584"
                />
            </View>
        );
    }
}

