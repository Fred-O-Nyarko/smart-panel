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
  TextInput,
  Input,
  Item,
  Button,
  Icon,
} from 'native-base';

class UserProfileScreen extends Component {
  render () {
    return (
      <Container>
        <ScrollView>

          <Content>
            <Form>
              <Header style={styles.header}>
                <StatusBar
                  barStyle={'light-content'}
                  backgroundColor="#0BB5FF"
                />
                <Left>

                  <Button transparent>
                    <Icon
                      name="arrow-back"
                      onPress={() => {
                        this.props.navigation.navigate ('HomeScreen');
                      }}
                    />
                  </Button>

                </Left>
                <Body>
                  <Title style={{marginLeft: 30}}>User Profile</Title>
                </Body>
              </Header>
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

              <Item rounded style={styles.placeholder}>
                <Icon style={{color: 'grey'}} name="mail" />
                <Text style={{padding: 20}}>Email</Text>
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon style={{color: 'grey'}} name="call" />
                <Input placeholder="Number" />
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon style={{color: 'grey'}} name="pin" />
                <Input placeholder="HomeAddress" />
              </Item>
              <Item rounded style={styles.placeholder}>
                <Icon style={{color: 'grey'}} name="heart" />
                <Input placeholder="Interest" />
              </Item>
            </Form>
          </Content>

        </ScrollView>
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

  line: {
    marginTop: 160,
  },

  placeholder: {
    marginTop: 26,
  },
});

export default UserProfileScreen;
