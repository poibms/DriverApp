import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import SignInScreen from './src/screens/SignInScreen/index';
import AuthStack from './src/navigation/AuthStack';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <SafeAreaView style={styles.root}> */}
      {/* <SignInScreen /> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// });

export default App;
