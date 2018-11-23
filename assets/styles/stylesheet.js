import { StyleSheet, Dimensions } from 'react-native'

// Primary Style Guide for entire application
const primary = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#34495e'
    },
    bodyText: {
        color: '#636e72',
        fontSize: 13,
        fontFamily: 'Helvetica',
    },
    headerText: {
        fontSize: 20
    }
});

// Style definition for card components
const card = StyleSheet.create ({
    title: {
        color: 'steelblue',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 5
    },
    location: {
        color: '#8fbc8f',
        fontWeight: '700',
        marginTop: 5,
        marginBottom: 5
    },
    container: {
        backgroundColor: '#F7F7F7',
        padding: 15,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
    },
    bodyText: primary.bodyText,
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 10
    },
    bannerIcon: {
        flex: 1,
        resizeMode: 'center',
        borderRadius: 50,
        marginRight: 10,
        height: 50
    },
    body: {
        flex: 5
    }
})

export { primary, card }
