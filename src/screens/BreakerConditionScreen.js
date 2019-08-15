import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
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
} from 'native-base';

class BreakerConditionScreen extends Component {
  constructor (props) {
    super (props);

    this.state = {
      data1: [
        // {
        //   name: 'Total Power',
        //   status: 'Read Only', //field3
        // },
        // {
        //   name: 'Instantaneous Power',
        //   status: 'Read Only', //field3
        // },
        // {
        //   name: 'Average Power',
        //   status: 'Read Only', //field3
        // },
        // {
        //   name: 'Energy(kWh)',
        //   status: 'Read Only', //field3
        // },
      ],

      data2: [],
      data3: [],
      data4: [],
    };
  }

  componentDidMount () {
    ToastAndroid.show ('Fetching data', 1000);
    this.getFieldData ();
  }

  render () {
    const {data1} = this.state;
    const {data2} = this.state;
    const {data3} = this.state;
    const {data4} = this.state;
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
            <Title>Breaker Condition</Title>
          </Body>
        </Header>

        <ScrollView style={{flex: 1, padding: 10}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >

            {data1.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>{item.name}</Text>
                  <TextInput
                    value={item.status}
                    editable={false}
                    // style={{marginRight: 40}}
                  />
                </View>
              );
            })}

            {data2.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>{item.name}</Text>
                  <TextInput
                    value={item.status}
                    editable={false}
                    // style={{marginRight: 40}}
                  />
                </View>
              );
            })}

            {data3.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>{item.name}</Text>
                  <TextInput
                    value={item.status}
                    editable={false}
                    // style={{marginRight: 40}}
                  />
                </View>
              );
            })}

            {data4.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>{item.name}</Text>
                  <TextInput
                    value={item.status}
                    editable={false}
                    // style={{marginRight: 40}}
                  />
                </View>
              );
            })}

          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 10,
              borderWidth: 0.01,
            }}
          />

          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker1</Text>
            <Icon style={styles.breakerIcon} name="bulb" />
            <Icon style={styles.flameIcon} name="radio-button-on" />
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 10,
              borderWidth: 0.01,
            }}
          />

          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker2</Text>
            <Icon style={styles.breakerIcon} name="print" />
            <Icon style={styles.flameIcon} name="radio-button-on" />
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 10,
              borderWidth: 0.01,
            }}
          />

          <View style={styles.circuit}>

            <Text style={styles.breakerText}>Breaker3</Text>
            <Icon style={styles.breakerIcon} name="desktop" />
            <Icon style={styles.flameIcon} name="radio-button-on" />
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 10,
              borderWidth: 0.01,
            }}
          />

          <View style={styles.legend1}>
            <Icon style={styles.greenFlame} name="radio-button-on" />
            <Text style={styles.breakerText1}>Good</Text>

          </View>

          <View style={styles.legend2}>
            <Icon style={styles.redFlame} name="radio-button-on" />
            <Text style={styles.breakerText1}>Bad</Text>
          </View>

          <View style={styles.legend3}>
            <Icon style={styles.yellowFlame} name="radio-button-on" />
            <Text style={styles.breakerText1}>Warning</Text>
          </View>

          <Icon style={styles.refreshIcon} name="refresh" />
        </ScrollView>
      </Container>
    );
  }

  getFieldData = () => {
    fetch (
      'https://api.thingspeak.com/channels/775284/feeds.json?api_key=NYWQNDZ7KOYEL9TA&results=2'
    )
      .then (res => {
        status = res.status;
        return res.json ();
      })
      .then (json => {
        if (status === 200) {
          const data1 = [
            {
              name: json.channel.field1,
              status: Boolean (json.feeds.length) ? json.feeds[0].field1 : 0,

              // name: json.channel.field2,
              // status: Boolean (json.feeds.length) ? json.feeds[0].field2 : 0,

              // name: json.channel.field3,
              // status: Boolean (json.feeds.length) ? json.feeds[0].field3 : 0,

              // name: json.channel.field4,
              // status: Boolean (json.feeds.length) ? json.feeds[0].field4 : 0,
            },
          ];
          this.setState ({data1});

          const data2 = [
            {
              name: json.channel.field2,
              status: Boolean (json.feeds.length) ? json.feeds[0].field2 : 0,
            },
          ];
          this.setState ({data2});

          const data3 = [
            {
              name: json.channel.field3,
              status: Boolean (json.feeds.length) ? json.feeds[0].field3 : 0,
            },
          ];
          this.setState ({data3});

          const data4 = [
            {
              name: json.channel.field4,
              status: Boolean (json.feeds.length) ? json.feeds[0].field4 : 0,
            },
          ];
          this.setState ({data4});
        }
      })
      .catch (err => ToastAndroid.show (err.message, ToastAndroid.LONG));
  };
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

  textArea: {
    flexDirection: 'row',
  },

  textBox: {
    flexDirection: 'column',
  },

  circuit: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },

  breakerText: {
    marginLeft: 0,
  },

  bulbText: {
    marginLeft: 80,
  },

  flameIcon: {
    marginLeft: 80,
    color: 'green',
  },

  breakerIcon: {
    marginLeft: 80,
    color: 'grey',
  },

  legend1: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 40,
  },

  breakerText1: {
    marginLeft: 10,
    color: 'grey',
  },

  legend2: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 10,
  },

  legend3: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 10,
  },

  redFlame: {
    marginLeft: 20,
    color: 'red',
  },

  greenFlame: {
    marginLeft: 20,
    color: 'green',
  },

  yellowFlame: {
    marginLeft: 20,
    color: 'yellow',
  },

  refreshIcon: {
    marginLeft: 309,
    color: 'grey',
    marginTop: 10,
  },
});

export default BreakerConditionScreen;
