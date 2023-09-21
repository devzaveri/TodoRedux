import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {incrementCountAction, decerementCountAction} from './CounterAction';
class MyComponent extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginVertical: 50}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {' '}
            Counter Value = {this.props.counter}{' '}
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Button
            title="Increment +1"
            style={{marginVertical: 50}}
            onPress={() => {
              this.props.increaseCounter(10);
            }}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Button
            title="Increment +5"
            style={{marginVertical: 50}}
            onPress={() => {
              this.props.increaseCounter(5);
            }}
          />
        </View>
        <View style={{marginVertical: 50}}>
          <Button
            title="Decrement -1"
            onPress={() => {
              this.props.decreaseCounter();
            }}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: parameter => {
      dispatch(incrementCountAction(parameter));
    },
    decreaseCounter: () => {
      dispatch(decerementCountAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
