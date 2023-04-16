import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import Logo from '../../../assets/images/Image.png';

function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} />
        {/* <Logo width={300} height={300} /> */}
      </View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            top: -200,
            color: '#007977',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Luminous
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#007977',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Let's Begin
        </Text>
        {/* <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
