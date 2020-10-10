import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

import {MyInput, MyButton} from './components';

const Login = () => {
  return (
    <SafeAreaView style={styles.safeareaView}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView style={styles.scrollView} bounces={false}>
          <View style={{flex: 1}}>
            <Image
              source={require('./assets/cart.png')}
              style={styles.logoStyle}
            />

            <MyInput holder="E-posta adresinizi giriniz.." />
            <MyInput holder="Şifrenizi giriniz.." />

            <MyButton text="Giriş Yap" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
  },
  safeareaView: {
    flex: 1, backgroundColor: '#b2dfdb'
   
  },
  scrollView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default Login;
