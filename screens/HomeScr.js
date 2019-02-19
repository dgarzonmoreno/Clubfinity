import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import EventCard from '../components/EventCard';

// Event Feed App Module
class EventFeed extends Component {
  static navigationOptions = {
    title: 'Clubfinity',
    headerStyle: { backgroundColor: '#7e947f' },
    headerTitleStyle: { color: "#ecf0f1", letterSpacing: 2 },
  }
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    const eventData = [
      {
        id: 1,
        name: "Software Engineering Club",
        place: "CSE 0113",
        description: "1/12/19 - Docker Tech Talk"
      },
      {
        id: 2,
        name: "ACM",
        place: "Fishbowl",
        description: "1/13/19 - Infinite Energy Event"
      },
      {
        id: 3,
        name: "ACE",
        place: "TUR 0114",
        description: "1/14/19 - Stuff"
      },
      {
        id: 4,
        name: "InfoSEC",
        place: "TUR 0114",
        description: "1/15/19 - Hacking"
      },
      {
        id: 5,
        name: "WiCSE",
        place: "NPB 6472",
        description: "1/16/19 - Event"
      },
      {
        id: 6,
        name: "SHPE",
        place: "MEB 2921",
        description: "1/17/19 - Event"
      }
    ];

    return (
      <View style={[primary.container, primary.bodyText]}>
        <FlatList
          data={eventData}
          key={eventData.id}
          renderItem={({ item }) =>
            <EventCard data={item} />
          }
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default EventFeed;