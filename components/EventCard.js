import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { card } from '../assets/styles/stylesheet';
import { EventButton } from './EventButton';

const EventCard = (props) => {
	return (
		<View style={card.container}>
			<View style={card.banner}>
				<Image style={card.bannerIcon} source={require('../assets/images/sec-icon.png')} />
				<Text style={card.title}>{props.data.name}</Text>
			</View>
			<View style={card.body}>
				<Text style={card.location}>{props.data.place.name}</Text>
				<Text style={card.bodyText}>{props.data.description}</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
					<EventButton name={'Not Going'} btnColor={'#ff8080'} />
					<EventButton name={'Going'} btnColor={'#00b894'} />
				</View>
			</View>
		</View>
	);
};

export default EventCard;