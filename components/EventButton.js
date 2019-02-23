import React, { Component } from 'react';
import { Button } from 'react-native';

class EventButton extends Component {

    render() {
        return (
            <Button
                color={this.props.btnColor}
                title={this.props.name}
                onPress={this._eventHandler}
            />);
    }

    _eventHandler = () => {
        console.log("Button clicked");
    }
}

export { EventButton };