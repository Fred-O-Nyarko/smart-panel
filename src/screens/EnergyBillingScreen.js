import React, {Component} from 'react';
import {StyleSheet, TextInput, ScrollView, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Left,
  Title,
  Center,
  Body,
  Text,
  Textarea,
  Item,
  View,
  Icon,
  Input,
  Button,
  ListItem,
} from 'native-base';

class EnergyBillingScreen extends Component {
  render () {
    return (
      <Container>

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
            <Title>Energy Billing</Title>
          </Body>
        </Header>
        <ScrollView>

          <Icon style={styles.moneyIcon} name="cash" />

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 50,
              borderWidth: 0.5,
            }}
          />

          <ListItem>
            <View style={styles.money1Icon}>
              <Icon style={styles.money2Icon} name="cash" />
              <Text style={styles.breakerText}>Breaker1</Text>
              <TextInput
                value="Read Only"
                editable={false}
                style={{marginLeft: 100}}
              />

            </View>
          </ListItem>

          <ListItem>
            <View style={styles.money1Icon}>
              <Icon style={styles.money2Icon} name="cash" />
              <Text style={styles.breakerText}>Breaker2</Text>
              <TextInput
                value="Read Only"
                editable={false}
                style={{marginLeft: 100}}
              />
            </View>
          </ListItem>

          <ListItem>
            <View style={styles.money1Icon}>
              <Icon style={styles.money2Icon} name="cash" />
              <Text style={styles.breakerText}>Breaker3</Text>

              <TextInput
                value="Read Only"
                editable={false}
                style={{marginLeft: 100}}
              />

            </View>

          </ListItem>
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

  money1Icon: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 4,
  },

  moneyIcon: {
    borderRadius: 8000,
    borderWidth: 2.5,
    borderColor: 'white',
    alignSelf: 'center',
    fontSize: 100,
    color: 'green',
    marginTop: 30,
  },

  money2Icon: {
    fontSize: 25,
    color: 'green',
    marginTop: 10,
  },

  breakerText: {
    marginLeft: 60,
    fontSize: 18,
    marginTop: 10,
  },

  textArea: {
    marginLeft: 60,

    marginTop: 12,
  },
});

export default EnergyBillingScreen;
