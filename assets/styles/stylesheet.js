import { StyleSheet, Dimensions } from 'react-native'

// Primary Style Guide for entire application
const primary = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#00b894'
    },
    bodyText: {
        color: '#636e72',
        fontSize: 13,
    },
    headerText: {
        fontSize: 20
    }
});

// Style definition for card components
const card = StyleSheet.create({
    title: {
        color: '#2980b9',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 5
    },
    location: {
        color: 'teal',
        fontWeight: '700',
        marginTop: 5,
        marginBottom: 5
    },
    container: {
        backgroundColor: '#f5f6fa',
        padding: 15,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 2
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
        flex: 5,
    }
});


export { primary, card }
