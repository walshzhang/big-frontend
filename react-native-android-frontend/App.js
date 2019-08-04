import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';

import { store } from './store';
import { Provider } from 'react-redux';
import Toolbox from './components/Toolbox';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoCreator />
        <ScrollView>
          <TodoList />
        </ScrollView>
        <Toolbox />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  }
})
