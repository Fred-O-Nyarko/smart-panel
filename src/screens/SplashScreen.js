/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Container} from 'native-base';
import firebase from 'react-native-firebase';

class SplashScreen extends Component {
  constructor (props) {
    super (props);
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  componentDidMount () {
    this.unsubscriber = firebase.auth ().onAuthStateChanged (user => {
      if (user) {
        console.log (user);
        this.props.navigation.navigate ('MainStack');
      } else {
        this.props.navigation.navigate ('AuthStack');
      }
    });
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber ();
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image style={styles.logo} source={require ('../assets/PCB.png')} />
        <View style={styles.logo2}>
          <Image style={styles.logo4} source={require ('../assets/bolt.jpg')} />
          <Text style={styles.logoText}>MARTPANEL</Text>
          <Image style={styles.logo3} source={require ('../assets/Bulb.png')} />
        </View>

        <View style={styles.Load}>
          <Text style={styles.Loading}>Loading</Text>
          <ActivityIndicator size="large" color="black" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },

  logo: {
    width: 90,
    height: 90,
  },
  logo2: {
    flexDirection: 'row',
  },
  logo3: {
    width: 15,
    height: 15,
  },
  logoText: {
    fontWeight: 'bold',
    ///fontSize:20
  },
  logo4: {
    width: 15,
    height: 15,
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Loading: {},
  Load: {
    position: 'absolute',
    bottom: 20,
  },
});

export default SplashScreen;
