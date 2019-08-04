import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import Axios from 'axios';
import { addTodo } from '../store';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {action: ''}
  }

  changeInput = event => this.setState({ action: event.target.value });

  render = () => (
    <View>
      <Input
        placeholder='请输入...'
        value={this.state.action}
        onChange={this.changeInput}
        onSubmitEditing={event => { this.props.addTodo(event); this.setState({action: ''}) }}
      />
    </View>
  );
};


const mapDispatchToProps = dispatch => ({
  addTodo: event => {
    const action = event.nativeEvent.text;
    console.log('add ... ', action);
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    Axios.post(
      'http://192.168.31.100:8080/api/todo',
      `action=${action}`,
      config
    ).then(dispatch(addTodo({ action, done: false })));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TodoCreator);
