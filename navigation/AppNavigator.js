import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from '../screens/LoginScreen';
// import DocumentAssessmentScreen from '../screens/DocumentAssessmentScreen';
// import FaceMatchServiceScreen from '../screens/FaceMatchServiceScreen';
// import LivenessServiceScreen from '../screens/LivenessServiceScreen';
// import NFCPassportReaderScreen from '../screens/NFCPassportReaderScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="DocumentAssessment" component={DocumentAssessmentScreen} />
            <Stack.Screen name="FaceMatchService" component={FaceMatchServiceScreen} />
            <Stack.Screen name="LivenessService" component={LivenessServiceScreen} />
            <Stack.Screen name="NFCPassportReader" component={NFCPassportReaderScreen} />
            <Stack.Screen name="Login" component={LoginScreen} /> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
