import React, { Component } from 'react';
import {
  AppRegistry,
  Slider,
  Text,
  View,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

let ColorSlider = React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onValueChange: React.PropTypes.func.isRequired,
    maxValue: React.PropTypes.number,
  },

  getInitialState: function () {
      return {
        maxValue: this.props.maxValue || 255,
      }
  },

  render: function () {
    return (
      <View>
        <Slider
          onValueChange={this.props.onValueChange}
          style={{width: width * 0.8}}
          maximumValue={this.state.maxValue}
          value={this.props.value}/>
        <Text>{this.props.color}:{this.props.value}</Text>
      </View>
    );
  }
});

let AwesomeProject = React.createClass({
  getInitialState: function () {
      return {
        welcome: true,
        slideCompletionValue: 0,
        slideCompletionCount: 0,
        red: 255,
        blue: 255,
        green: 255,
        opacity: 100
      }
  },

  createChangeColorFunction: function (color) {
    return function (value) {
      newState = {};
      newState[color] = parseInt(value)
      this.setState(newState)
    }
  },

  clickWelcome: function () {
    this.setState("welcome", false)
  },

  render: function () {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.opacity/100})`,
        }}>
        <Text style={{fontSize: 20}}>Color Picker</Text>
        <ColorSlider
          color="red"
          value={this.state.red}
          onValueChange={this.createChangeColorFunction("red").bind(this)}
          />
        <ColorSlider
          color="blue"
          value={this.state.blue}
          onValueChange={this.createChangeColorFunction("blue").bind(this)}
          />
        <ColorSlider
          color="green"
          value={this.state.green}
          onValueChange={this.createChangeColorFunction("green").bind(this)}
          />
          <ColorSlider
            color="opacity"
            value={this.state.opacity}
            maxValue={100}
            onValueChange={this.createChangeColorFunction("opacity").bind(this)}
            />
      </View>
    );
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
