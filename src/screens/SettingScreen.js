import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Left,
  Title,
  Body,
  Center,
  Text,
  Item,
  View,
  Icon,
  Input,
  Button,
  ListItem,
  Footer,
  Switch,
} from 'native-base';

class SettingScreen extends Component {
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
          <StatusBar barStyle={'light-content'} backgroundColor={'#0BB5FF'} />
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack ();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>

        <Icon style={styles.settingIcon} name="settings" />

        <View
          style={{
            borderBottomColor: 'black',

            marginTop: 40,
            borderWidth: 0.5,
          }}
        />
        <ListItem style={styles.listItem}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text style={styles.themeText}>Change Theme</Text>
            <Switch value={this.state.theme} />
            {/* <Icon style={{marginLeft: 180, marginTop: 20}} name="switch" /> */}
          </View>
        </ListItem>

        <ListItem
          style={styles.listItem}
          onPress={() => {
            this.props.navigation.navigate ('ManageAccountScreen');
          }}
        >
          <Text style={styles.text}> Account</Text>
        </ListItem>

        <ListItem
          style={styles.listItem}
          onPress={() => {
            this.props.navigation.navigate ('ManageBreakerScreen');
          }}
        >
          <Text style={styles.text}> Manage Breaker</Text>
        </ListItem>

        <Footer style={styles.footer}>

          <Icon name="construct" style={styles.toolsIcon} />

        </Footer>
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

  footer: {
    marginTop: 70,
    backgroundColor: '#0BB5FF',
    height: 80,
  },

  toolsIcon: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
  },

  settingIcon: {
    fontSize: 70,
    color: '#0BB5FF',
    alignSelf: 'center',
    marginTop: 40,
  },

  themeText: {
    marginLeft: 6.5,
  },
});

export default SettingScreen;
