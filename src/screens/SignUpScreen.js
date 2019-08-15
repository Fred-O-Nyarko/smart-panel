import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Button,
  Text,
  Input,
  Left,
  Icon,
  Body,
  Title,
  Item,
  Toast,
} from 'native-base';

// export default class Loading extends Component {
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.props.navigation.navigate(user ? 'Home' : 'SignUp')
//     })
// }

import firebase from 'react-native-firebase';
class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
    name: '',
    address: '',
    phone: '',
    deleteme: '',
  };

  writeUserData = (userId, name, email, address, phone) => {
    return new Promise ((resolve, reject) => {
      firebase
        .database ()
        .ref ('users/' + userId)
        .set ({
          username: name,
          email: email,
          address: address,
          phone: phone,
        })
        .then (r => {
          resolve ();
        })
        .catch (e => {
          reject ();
        });
    });
  };

  onRegister = () => {
    const {screenProps: {switchStack}, navigation} = this.props;

    this.setState ({loading: true});
    const {email, password, phone, name, address} = this.state;
    firebase
      .auth ()
      .createUserWithEmailAndPassword (email, password)
      .then (data => {
        var user_uid = data.user.uid;
        this.setState ({
          deleteme: user_uid,
        });

        // var db = firebase.database ();
        // var ref = db.ref ('server_data');
        // var usersRef = ref.child ('users/' + user_uid);

        // usersRef
        //   .push ({
        //     username: name,
        //     email: email,
        //     address: address,
        //     phone: phone,
        //     password: password,
        //   })
        //   .then (res => {
        //     this.setState ({loading: false});
        //     switchStack.navigate ('MainStack');
        //   })
        //   .catch (error => {
        //     Toast.show ({
        //       text: 'Something went wrong with adding to database',
        //     });
        //     setTimeout (() => {
        //       this.setState ({loading: false});
        //     }, 100);
        //   });

        firebase
          .database ()
          .ref ('users/')
          .set ({
            username: name,
            email: email,
            address: address,
            phone: phone,
            password: password,
          })
          .then (res => {
            this.setState ({loading: false});
            switchStack.navigate ('MainStack');
          })
          .catch (error => {
            Toast.show ({
              text: 'Something went wrong with adding to database',
            });
            setTimeout (() => {
              this.setState ({loading: false});
            }, 100);
          });

        const serverTime = firebase.database ().getServerTime ();
        this.setState ({
          deleteme: serverTime,
        });

        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch (error => {
        const {code, message} = error;
        Toast.show ({
          text: 'Something went wrong with creating account',
        });
        setTimeout (() => {
          this.setState ({loading: false});
        }, 100);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  render () {
    const {screenProps: {switchStack}, navigation} = this.props;
    const {deleteme} = this.state;
    return (
      <View style={styles.body}>
        <Header style={styles.header}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#0BB5FF'} />
          <Left>
            <Button
              transparent
              onPress={() => {
                navigation.goBack ();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Create an Account</Title>
          </Body>
        </Header>
        <ScrollView style={styles.form}>
          <Item rounded style={styles.line1}>

            <Input
              placeholder="Full Name"
              onChangeText={name => this.setState ({name})}
            />
          </Item>
          <Item rounded style={styles.line1}>

            <Input
              placeholder="Email"
              onChangeText={email => this.setState ({email})}
              value={this.state.email}
            />
          </Item>
          <Item rounded style={styles.line1}>

            <Input
              placeholder="Phone Number"
              onChangeText={phone => this.setState ({phone})}
            />
          </Item>
          <Item rounded style={styles.line1}>

            <Input
              placeholder="Home Address"
              onChangeText={address => this.setState ({address})}
            />
          </Item>
          <Item rounded style={styles.line1}>

            <Icon style={{color: 'grey'}} name="lock" />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={password => this.setState ({password})}
              value={this.state.password}
            />
          </Item>

          <Text>{deleteme}</Text>

          <Button
            light
            style={styles.createButton}
            onPress={() => {
              this.onRegister ();
            }}
          >
            <Text style={{color: 'white'}}>
              Create
            </Text>
          </Button>

          <Text style={styles.account}>
            By creating this account you agree to our terms and conditions.
          </Text>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: 23,
    width: 34,
  },

  body: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0BB5FF',
    height: 60,
  },

  createButton: {
    width: '50%',
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#0BB5FF',
    alignSelf: 'center',
    borderRadius: 5,
  },

  form: {
    padding: 10,
    marginTop: 20,
    width: '100%',
    height: '91%',
  },

  line1: {
    marginTop: 20,
    padding: 10,
    height: 50,
  },

  account: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 50,
  },
});

export default SignUpScreen;
