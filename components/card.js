import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { card } from '../assets/styles/stylesheet';

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={card.container}>
				<View style={card.banner}>
					<Image style={card.bannerIcon} source={require('../assets/images/sec-icon.png')} />
					<Text style={card.title}>{this.props.data.name}</Text>
				</View>
				<View style={card.body}>
					<Text style={card.location}>{this.props.data.place.name}</Text>
					<Text style={card.bodyText}>{this.props.data.description}</Text>
				</View>
			</View>
		);
	}
}

export { Card };