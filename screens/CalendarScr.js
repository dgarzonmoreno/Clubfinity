import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Calendar, CalendarList, Agenda,
} from 'react-native-calendars';
import AgendaCard from '../components/AgendaCard';

export default class CalendarScr extends React.Component {
  static navigationOptions = {
    title: 'Clubfinity',
    headerStyle: { backgroundColor: '#7e947f' },
    headerTitleStyle: { color: "#ecf0f1", letterSpacing: 2 },
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.calContainer}>
          <Calendar>
          </Calendar>
        </View>

        <View style={style.agendaContainer}>
          <Text>Events happening today</Text>
          <AgendaCard />
          <AgendaCard />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingHorizontal: 10,
  },

  calContainer: {
    flex: 3,

  },

  agendaContainer: {
    flex: 2,
    paddingHorizontal: 10,
  },

  agendaHeader: {
    fontSize: 22,
    color: '#7e947f'
  }
})
