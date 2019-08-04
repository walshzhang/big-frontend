import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, CheckBox, Button } from 'react-native-elements';

import { loadTodos, toggleTodo, removeTodo } from '../store';

import Axios from 'axios';
import { connect } from 'react-redux';

class TodoList extends Component {
  componentDidMount = _ => this.props.loadTodos();

  todoColor = todo => {
    if (todo.done) {
      return { color: 'green' };
    }
  };

  render = () => {
    const { todos, toggleTodo, removeTodo } = this.props;

    return (
      <View style={styles.list}>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todo}>
            <CheckBox checked={todo.done} onPress={() => toggleTodo(index)} />
            <Text style={[styles.action, this.todoColor(todo)]}>
              {todo.action}
            </Text>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
              <Button title='x' color='red' onPress={() => removeTodo(index)}/>
            </View>
          </View>
        ))}
      </View>
    );
  };
}

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  loadTodos: _ => {
    Axios.get('http://192.168.31.100:8080/api/todo').then(response =>
      dispatch(loadTodos(response.data))
    );
  },
  toggleTodo: index => {
    Axios.post(`http://192.168.31.100:8080/api/todo/toggle/${index + 1}`).then(
      dispatch(toggleTodo(index))
    );
  },
  removeTodo: index => {
    Axios.delete(`http://192.168.31.100:8080/api/todo/${index + 1}`).then(
      dispatch(removeTodo(index))
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const styles = StyleSheet.create({
  list: {
    marginTop: 5
  },
  action: {
    fontSize: 20
  },

  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    marginHorizontal: 10,
    marginVertical: 3
  }
});
