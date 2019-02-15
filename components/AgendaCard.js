import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { card } from '../assets/styles/stylesheet';

export default class AgendaCard extends Component {
    render() {
        return (
            <View style={[card.container, style.container,]}>
                <View style={style.mainSection}>
                    <Text style={style.title}>GBM #2: Clubfinity</Text>
                    <Text style={card.bodyText}>Software Engineering Club</Text>
                </View>
                <View style={style.subSection}>
                    <Text style={card.bodyText}>5:10 pm</Text>
                    <Text style={card.bodyText}>CSE E112</Text>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    title: {
        fontWeight: '500'
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'center',
        maxHeight: 65,
        margin: 0,
    },

    mainSection: {
        flex: 4
    },

    subSection: {
        flex: 1
    }
})