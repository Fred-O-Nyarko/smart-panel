import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {
  Container,
  Left,
  Title,
  Body,
  Header,
  Content,
  Form,
  Text,
  Input,
  Item,
  Button,
  Icon,
} from 'native-base';

class ManageAccountScreen extends Component {
  render () {
    return (
      <Container style={styles.body}>

        <Content>
          <Form>
            <Header style={styles.header}>
              <StatusBar barStyle={'light-content'} backgroundColor="#0BB5FF" />
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
                <Title>Manage Account</Title>
              </Body>
            </Header>

            <ScrollView style={{padding: 20}}>
              <View
                style={{
                  alignSelf: 'center',
                  margin: 10,
                  marginBottom: 40,
                  width: 120,
                  height: 120,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 80,
                  borderWidth: 0.5,
                }}
              >
                <Icon name="person" style={{fontSize: 72, color: 'grey'}} />
              </View>
              <Item rounded style={styles.line}>
                <Icon name="mail" style={{color: 'grey'}} />
                <Input placeholder="Email" />
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon name="call" style={{color: 'grey'}} />
                <Input placeholder="Number" />
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon name="pin" style={{color: 'grey'}} />
                <Input placeholder="HomeAddress" />
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon name="heart" style={{color: 'grey'}} />
                <Input placeholder="Interest" />
              </Item>

              <Button full style={styles.button}>
                <Text style={{backgroundColor: '#0BB5FF'}}>
                  Save
                </Text>
              </Button>
            </ScrollView>
          </Form>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 20,
  },

  userProfile: {
    marginTop: 50,
    marginRight: 80,
    fontSize: 24,
  },

  header: {
    backgroundColor: '#0BB5FF',
    height: 60,
  },

  line: {},

  placeholder: {
    marginTop: 26,
  },

  button: {
    width: '50%',
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#0BB5FF',
    alignSelf: 'center',
    borderRadius: 5,
  },
});

export default ManageAccountScreen;
