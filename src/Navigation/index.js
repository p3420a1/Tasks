import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import {colors} from '../utils/colors'
import {StyleSheet, Dimensions} from 'react-native'
import AssignEmployee from '../screens/AssignEmployee'
import Task from '../screens/Task'

const { width, height } = Dimensions.get('window');
const Stack = createStackNavigator();

function MainNavigator() {
    return(
      <Stack.Navigator
        options = {{animationTypeForReplace: 'push'}}
        screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: '100',
              flex: 1,
              headerShown: false,
              headerMode: 'none',
              alignContent: 'center'
            }
        }}
      >
        <Stack.Screen name = "Home" component = {Home} 
            options = {{
            headerShown: true,
            headerTitleAlign: 'left',
            headerTitle: 'Create Task',
            headerTintColor: 'white',
            headerStyle: {height: height * 0.1, backgroundColor: colors.primaryPurple}}}/>

        <Stack.Screen name = "AssignEmployee" component = {AssignEmployee} 
            options = {{
            headerShown: true,
            headerTitleAlign: 'left',
            headerTintColor: 'white',
            headerStyle: {height: height * 0.1, backgroundColor: colors.primaryPurple}}}/>
        
        <Stack.Screen name = "Task" component = {Task} 
            options = {{
            headerShown: true,
            headerTitleAlign: 'left',
            headerTintColor: 'white',
            headerStyle: {height: height * 0.1, backgroundColor: colors.primaryPurple}}}/>
      </Stack.Navigator>
    )
  }

export default function AppContainer() {
    return(
      <NavigationContainer>
         <MainNavigator/>
      </NavigationContainer>
    )
  } 

  const styles = StyleSheet.create({
    gradient : {
      right: 0,
      top: 0.2,
      height: '100%',
      left: 0.1,
      position: 'absolute'
  }
    })