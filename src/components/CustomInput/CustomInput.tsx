import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, View} from 'react-native';

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="placeholder" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'F9FBFC',
    width: '100%',
    // border
  },
  input: {},
});

export default CustomInput;
