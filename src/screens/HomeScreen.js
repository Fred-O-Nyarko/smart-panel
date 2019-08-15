import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
  Container,
  Right,
  Content,
  Form,
  Text,
  Input,
  Button,
  Icon,
  ListItem,
} from 'native-base';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import firebase from 'react-native-firebase';


class HomeScreen extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide ();
  };

  showMenu = () => {
    this._menu.show ();
  };


  signOutUser = async () => {
    const {screenProps: {switchStack}} = this.props;

    try {
         //alert('ok')
        await firebase.auth().signOut();
        switchStack.navigate ('AuthStack');
    } catch (e) {
        console.log(e);
    }
}


// firebase.auth().signOut().then(function() {
//   console.log('Signed Out');
// }, function(error) {
//   console.error('Sign Out Error', error);
// });

  render () {
    const {screenProps: {switchStack}} = this.props;
    return (
      <Container style={styles.body}>
        <Content>
          <Form>
            <View style={styles.icons}>
              <StatusBar
                hidden={false}
                barStyle="dark-content"
                backgroundColor="#fff"
              />
              <Icon style={styles.person} name="contact" />

              <Right>
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <Button transparent onPress={this.showMenu}>
                      <Icon style={styles.list} name="more" />
                    </Button>
                  }
                >
                  <MenuItem
                    onPress={() => {
                      this.hideMenu ();
                      this.signOutUser()
                     
                    }}
                  >
                    Log Out
                  </MenuItem>
                </Menu>
              </Right>
            </View>
            <Text style={styles.panelText}>SMART PANEL</Text>

            <Text style={styles.welcomeText}>Welcome Home</Text>

            <View
              style={{
                borderBottomColor: '#0BB5FF',
                borderColor: '#0BB5FF',
                borderBottomWidth: 1,
                marginTop: 90,
                borderWidth: 4,
              }}
            />

            <ListItem
              style={styles.listItem}
              onPress={() => {
                this.props.navigation.navigate ('UserProfileScreen');
              }}
            >
              <Text style={styles.text}>User Profile</Text>
            </ListItem>

            <ListItem
              style={styles.listItem}
              onPress={() => {
                this.props.navigation.navigate ('BreakerConditionScreen');
              }}
            >
              <Text style={styles.text}> Breaker Condition</Text>
            </ListItem>

            <ListItem
              style={styles.listItem}
              onPress={() => {
                this.props.navigation.navigate ('EnergyBillingScreen');
              }}
            >
              <Text style={styles.text}> Energy Billing</Text>
            </ListItem>

            <ListItem
              style={styles.listItem}
              onPress={() => {
                this.props.navigation.navigate ('SettingScreen');
              }}
            >
              <Text style={styles.text}> Settings</Text>
            </ListItem>

          </Form>
        </Content>
      </Container>
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

  person: {
    color: '#0BB5FF',
    marginLeft: 8,
    marginTop: 16,
    fontSize: 40,
  },

  text: {
    lineHeight: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'grey',
  },

  icons: {
    flexDirection: 'row',
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  list: {color: '#0BB5FF'},

  panelText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0BB5FF',
  },

  welcomeText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#0BB5FF',
  },
  listItem: {
    marginLeft: 0,
    paddingLeft: 15,
    height: 80,
  },
  itemText: {
    color: 'grey',
  },
});

export default HomeScreen;
