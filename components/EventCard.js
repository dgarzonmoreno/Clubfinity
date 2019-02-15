import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { card } from '../assets/styles/stylesheet';
import { EventButton } from './EventButton';

export default class EventCard extends Component {
  render() {
    const data = this.props.data;
    return (
      <View style={card.container}>
        <View style={card.banner}>
          <Image style={card.bannerIcon} source={require('../assets/images/sec-icon.png')} />
          <Text style={card.title}>{data.name}</Text>
        </View>
        <View style={card.body}>
          <Text style={card.location}>{data.place}</Text>
          <Text style={card.bodyText}>{data.description}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <EventButton name={'Not Going'} btnColor={'#ff8080'} />
            <EventButton name={'Going'} btnColor={'#16a085'} />
          </View>
        </View>
      </View>
    );
  }
  
}

