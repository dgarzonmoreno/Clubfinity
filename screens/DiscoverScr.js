import React from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput, Image, Platform,
  ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import ClubCard from '../components/ClubCard';

export default class DiscoverScr extends React.Component {
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
    const clubData = [
      {
        id: 1,
        name: "UF SEC",
        description: "Dank Description"
      },
      {
        id: 2,
        name: "Rando Club",
        description: "Hi Club I Is"
      },
      {
        id: 3,
        name: "Rando Club",
        description: "Hi Club I Is"
      },
      {
        id: 4,
        name: "Rando Club",
        description: "Hi Club I Is"
      },
      {
        id: 5,
        name: "Rando Club",
        description: "Hi Club I Is"
      },
      {
        id: 6,
        name: "Rando Club",
        description: "Hi Club I Is"
      }
    ];

    return (
      <View style={[primary.container, primary.bodyText]}>
        <FlatList
          data={clubData}
          key={clubData.id}
          renderItem={({ item }) =>
            <ClubCard data={item} />
          }
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}
