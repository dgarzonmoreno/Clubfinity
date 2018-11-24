import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput } from 'react-native';
import { primary } from './assets/styles/stylesheet';
import EventCard from './components/EventCard';
const ACCESS_TOKEN = "EAAPnJK6Qg9YBAEOMIayl8sUTKaEs8IBsgyF54UxwEXES9H4ryTNZCqAm7Jj0DyV6NSAgmzZChGYey33sKCC1VB4ZAaAX1DRTBJsaoEQoDsbHwNZB4wv5GSZAZCyGeYSNl5XaYfErvbgUhpgHAhW1kvwKgsFghhq3ZAKWA3z57NwhQZDZD";

// Event Feed App Module
export default class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(`https://graph.facebook.com/420010478012940/events?access_token=${ACCESS_TOKEN}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={[primary.container, primary.bodyText]}>
        <Text style={primary.headerText}>Event Feed</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <EventCard data={item} />
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}