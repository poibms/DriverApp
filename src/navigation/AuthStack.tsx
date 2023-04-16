import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardingScreen from '../screens/OnBoardingScreen/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
