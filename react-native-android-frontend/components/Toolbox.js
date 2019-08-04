import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { loadTodos } from '../store';
import { connect } from 'react-redux';
import Axios from 'axios'

function Toolbox({ reload }) {
  return (
    <View style={styles.toolbox}>
      <Button title='Reload' style={styles.buttons} onPress={reload} />
    </View>
  );
}

const styles = StyleSheet.create({
  toolbox: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttons: {
    backgroundColor: 'blue'
  }
});

const mapDispatchToProps = dispatch => ({
  reload: _ =>
    Axios.get('http://192.168.31.100:8080/api/todo').then(response =>
      dispatch(loadTodos(response.data))
    )
});

export default connect(
  null,
  mapDispatchToProps
)(Toolbox);
