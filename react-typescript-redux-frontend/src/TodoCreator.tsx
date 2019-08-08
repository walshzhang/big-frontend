import React, { Component, Dispatch } from 'react';
import { AppActionTypes } from './store/types';
import Axios from 'axios';
import { addTodo } from './store';
import { connect } from 'react-redux';

interface Props {
  addTodo: (action: string) => void;
}

interface State {
  action: string;
}

class TodoCreator extends Component<Props, State> {
  state: State = {
    action: ''
  };
  inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action = event.target.value;
    this.setState({ action });
  };

  render = () => {
    let { addTodo } = this.props;
    return (
      <form className='form-inline offset-2 col-8 px-0  mt-3'>
        <input
          type='text'
          className='form-control'
          style={{ width: '88%' }}
          value={this.state.action}
          onChange={this.inputChanged}
        />
        <button
          className='btn btn-primary ml-2'
          style={{ width: '10%' }}
          onClick={event => {
            event.preventDefault();
            addTodo(this.state.action);
            this.setState({ action: '' });
          }}
        >
          添加
        </button>
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => ({
  addTodo: (action: string) => {
    const url = 'http://localhost:8080/api/todo';
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    Axios.post(url, `action=${action}`, config).then(_ =>
      dispatch(addTodo({ action, done: false }))
    );
  }
});
export default connect(
  null,
  mapDispatchToProps
)(TodoCreator);
