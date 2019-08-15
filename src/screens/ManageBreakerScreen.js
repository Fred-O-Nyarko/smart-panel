import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Left,
  Title,
  Body,
  Text,
  Item,
  View,
  Icon,
  Input,
  Button,
  ListItem,
  Switch,
} from 'native-base';

class ManageBreakerScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      theme: false,
    };
  }
  render () {
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar barStyle={'light-content'} backgroundColor="#0BB5FF" />
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => {
                  this.props.navigation.navigate ('SettingScreen');
                }}
              />
            </Button>
          </Left>
          <Body>
            <Title>Manage Breaker Screen</Title>
          </Body>
        </Header>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            marginBottom: 30,

            fontSize: 17,
          }}
        >
          Switch Individual panels on or off
        </Text>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 40,
            borderWidth: 0.5,
          }}
        />

        <ListItem>
          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker1</Text>
            <Switch
              style={styles.switchIcon}
              value={this.state.theme}
              onValueChange={value => {
                this.setState ({theme: value});
              }}
            />

          </View>
        </ListItem>

        <ListItem>
          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker2</Text>
            <Switch
              style={styles.switchIcon}
              value={this.state.theme}
              onValueChange={value => {
                this.setState ({theme: value});
              }}
            />

          </View>
        </ListItem>

        <ListItem>
          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker3</Text>
            <Switch
              style={styles.switchIcon}
              value={this.state.theme}
              onValueChange={value => {
                this.setState ({theme: value});
              }}
            />

          </View>

        </ListItem>

        <Switch
          style={styles.switchButtonIcon}
          value={this.state.theme}
          onValueChange={value => {
            this.setState ({theme: value});
          }}
        />

        <Text style={styles.switchIconText}>Turn entire circuit on or off</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: 23,
    width: 34,
  },

  header: {
    backgroundColor: '#0BB5FF',
    height: 60,
  },

  circuit: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 10,
  },

  breakerText: {
    marginLeft: 0,
    color: 'grey',
  },

  bulbText: {
    marginLeft: 80,
  },

  switchIcon: {
    marginLeft: 160,
    fontSize: 40,
    color: 'grey',
  },

  switchButtonIcon: {
    marginTop: 40,
    color: 'grey',
    fontSize: 100,
    alignSelf: 'center',
  },

  switchIconText: {
    fontSize: 20,
    textAlign: 'center',
  },

  breakerText1: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ManageBreakerScreen;
