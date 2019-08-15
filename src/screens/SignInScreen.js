import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Container, Item, Input, Button, Text, Icon, Toast} from 'native-base';
import firebase from 'react-native-firebase';

class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
    loading: false,
  };

  onLogin = () => {
    this.setState ({loading: true});
    const {email, password} = this.state;

    if (email !== '' && password !== '') {
      firebase
        .auth ()
        .signInWithEmailAndPassword (email, password)
        .then (user => {
          this.setState ({loading: false});
          this.props.navigation.navigate ('MainStack');
        })
        .catch (error => {
          const {code, message} = error;
          Toast.show ({
            text: 'Incorrect credentials',
          });
          setTimeout (() => {
            this.setState ({loading: false});
          }, 100);
        });
    } else {
      Toast.show ({
        text: 'Field empty,enter your details',
      });
    }
  };

  render () {
    const {screenProps: {switchStack}, navigation} = this.props;
    return (
      <Container style={styles.body}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

        <View style={styles.container1}>

          <Image style={styles.logo} source={require ('../assets/PCB.png')} />
          <View style={styles.logo2}>
            <Image
              style={styles.logo3}
              source={require ('../assets/bolt.jpg')}
            />
            <Text style={styles.logoText}>MARTPANEL</Text>
            <Image
              style={styles.logo3}
              source={require ('../assets/Bulb.png')}
            />
          </View>
        </View>
        <View style={styles.form}>
          <Item rounded style={styles.line1}>
            <Icon style={{color: '#0BB5FF'}} name="mail" />
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState ({email})}
            />
          </Item>
          <Item rounded style={styles.line1}>
            <Icon style={{color: '#0BB5FF'}} name="lock" />
            <Input
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState ({password})}
            />
          </Item>
        </View>
        <TouchableOpacity
          full
          rounded={true}
          style={styles.button}
          onPress={() => this.onLogin ()}
        >
          <Text style={{color: 'grey'}}>
            CONTINUE
          </Text>

        </TouchableOpacity>
        <View style={styles.accountText}>
          <Text>Dont have an account?</Text>
          <Text
            onPress={() => {
              navigation.navigate ('SignUpScreen');
            }}
          >
            {' Sign Up?'}
          </Text>
        </View>
        {this.state.loading &&
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
          >
            <ActivityIndicator
              size="large"
              color={'#0BB5FF'}
              style={{alignSelf: 'center'}}
            />
          </View>}
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: 23,
    width: 34,
    backgroundColor: '#00FFFF',
  },
  container1: {
    marginBottom: 30,
    marginTop: -80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },

  person: {
    marginTop: 40,
    fontSize: 100,
    textAlign: 'center',
    color: 'grey',
  },

  form: {
    marginTop: 100,
    // marginBottom: 50,
  },
  line1: {
    marginTop: 10,
    padding: 10,
    height: 50,
    backgroundColor: 'white',
  },

  button: {
    backgroundColor: '#0BB5FF',
    marginTop: 8,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },

  accountText: {
    flexDirection: 'row',
    marginLeft: 60,
    marginTop: 10,
  },
  logo: {
    width: 90,
    height: 90,
  },
  logo2: {
    flexDirection: 'row',
    marginTop: -10,
  },
  logo3: {
    width: 15,
    height: 15,
  },
  logoText: {
    fontWeight: 'bold',
  },
});

export default SignInScreen;
