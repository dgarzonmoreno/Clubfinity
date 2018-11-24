import React, { Component } from 'react';
import { Button } from 'react-native';

class EventButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                color={this.props.btnColor}
                title={this.props.name}
                onPress={this._eventHandler}
            />);
    }

    _eventHandler(type) {
        console.log("Button pressed");
    }
}

export { EventButton };