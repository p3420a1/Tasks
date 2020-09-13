import React from 'react';
import * as Font from 'expo-font';
import { View, ActivityIndicator, Text } from 'react-native';
import AppContainer from './src/Navigation'
import { colors } from './src/utils/colors';

console.disableYellowBox = true;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Poppins-Regular': require('./src/assets/font/Poppins-Regular.ttf'),
            'Poppins-Bold': require('./src/assets/font/Poppins-Bold.ttf'),
        });
        // const employees = generateEmployees(5);
        this.setState({ fontLoaded: true});
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <AppContainer/>    
            )
        } return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color= {colors.primaryPurple}/>
          </View>
        );
    }
}
