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
    let colors = ["red", "blue", "green", "opacity"]
    const that = this;
    let sliders = colors.map(function (color) {
      return <ColorSlider
        key={color}
        color={color}
        value={that.state[color]}
        maxValue={color === "opacity" ? 100 : null}
        onValueChange={that.createChangeColorFunction(color).bind(that)}
        />
    })
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.opacity/100})`,
        }}>
        <Text style={{fontSize: 20}}>Color Picker</Text>
        { sliders }
      </View>
    );
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
