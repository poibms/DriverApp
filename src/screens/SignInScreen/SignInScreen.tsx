import * as React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/Image.png';
import CustomInput from '../../components/CustomInput/CustomInput';

const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <CustomInput />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    height: 200,
  },
});

export default SignInScreen;
