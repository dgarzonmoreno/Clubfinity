import React from 'react'
import { DatePickerIOS, StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class SignUp extends React.Component {
constructor(props) {
super(props);
this.state = { fname: '', lname: '', dob: new Date(), email: '', username: '', password: '' }
}
render() {
return (
<View style={styles.container}>
<Text style={styles.bigTitle}> ClubFinity Sign Up</Text>
<TextInput
style={styles.textInput}
placeholder="First Name"
onChangeText={fname => this.setState({ fname })}
value={this.state.fname}
/>
<TextInput
style={styles.textInput}
placeholder="Last Name"
onChangeText={lname => this.setState({ lname })}
value={this.state.lname}
/>

<Text style={styles.dobTitle}>Date of Birth</Text>

<DatePickerIOS

style={styles.textInput1}
date = {this.state.dob}
mode = "date"
onDateChange = {this.setDate}

/>

<TextInput
style={styles.textInput}
placeholder="Email"
onChangeText={email => this.setState({ email })}
value={this.state.email}
/>
<TextInput
style={styles.textInput}
placeholder="Username"
onChangeText={username => this.setState({ username })}
value={this.state.username}
/>
<TextInput
secureTextEntry
style={styles.textInput}
autoCapitalize="none"
placeholder="Password"
onChangeText={password => this.setState({ password })}
value={this.state.password}
/>
<Button title="Sign Up" />

</View>
)
}
}

const styles = StyleSheet.create({
container: {
padding: 10,
flex: 1,
justifyContent: 'center',
alignItems: 'center'
},
dobTitle: {
padding: 10,
marginRight: 230,
color: 'gray',
},
bigTitle: {
fontWeight: 'bold',
fontSize: 30,
                                 color: 'green'
},
textInput1: {
width: '90%',
},
textInput: {
height: 40,
width: '90%',
borderColor: 'gray',
borderWidth: 1,
marginTop: 8,
borderBottomEndRadius: 10,
borderTopEndRadius: 10,
borderBottomStartRadius: 10,
borderTopStartRadius: 10
}
})
