import React, { Component } from 'react';
import Axios from 'axios';
import { addTodo } from './store';
import { connect } from 'react-redux';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ''
    };
  }

  actionChanged = event => {
    this.setState({ action: event.target.value });
  };

  render() {
    const { addTodo } = this.props;
    return (
      <form className='form-inline offset-2 col-8 px-0  mt-3'>
        <input
          type='text'
          className='form-control'
          style={{ width: '88%' }}
          value={this.state.action}
          onChange={this.actionChanged}
        />
        <button
          className='btn btn-primary ml-2'
          style={{ width: '10%' }}
          onClick={event => addTodo(event, this.state.action)}
        >
          添加
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: (event, action) => {
    event.preventDefault();
    const url = 'http://localhost:8080/api/todo';
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    Axios.post(url, `action=${action}`, config).then(dispatch(addTodo(action)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCreator);
