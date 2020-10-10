/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from "./src/Login"

const presFunc = () => {
  
  //spread operator
  const user={
    name:'Mevlüt',
    age:30,
    isAdmin:false
  }

  const member={
    ...user,
    pwd:'112254sss',
    type:'Hoca',
      
  }

  const myList=[1,2,3,4,5,6];
  const myCityList=["İzmir","Ankara",...myList];
  const myCopyList=[...myList];

  const myObj={
    url:"www.google.com",
    data:[1,4,6],
    config:"EMPTY"
  }

/////////////////////////////////////////
  console.log( myObj.config);

  const {config} =myObj
  const {url,data} =myObj
  console.log( url+ " - "+data+" - "+config);

/////////////////////////////////////////




  console.log( user);
  console.log( myCityList);
}

const App = () => {


  return (
    <SafeAreaView style={styles.safeAreaView0}>
      <View style={styles.view0} >
        <Text>Merhaba</Text>
        <Button title="Log" onPress={presFunc}></Button>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView0:{
    flex:1

  },
  view0: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
