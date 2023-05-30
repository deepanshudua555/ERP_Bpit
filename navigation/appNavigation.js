import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpTeacherScreen from '../screens/SignUpTeacherScreen';
import SignUpForScreen from '../screens/SignUpForScreen';
import SignUpStudentScreen from '../screens/SignUpStudentScreen';
import LeaveApplicationScreen from '../screens/LeaveApplicationScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LeaveApplication'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUpFor" options={{headerShown: false}} component={SignUpForScreen} />
        <Stack.Screen name="SignUpTeacher" options={{headerShown: false}} component={SignUpTeacherScreen} />
        <Stack.Screen name="SignUpStudent" options={{headerShown: false}} component={SignUpStudentScreen} />
        <Stack.Screen name="LeaveApplication" options={{headerShown: false}} component={LeaveApplicationScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}