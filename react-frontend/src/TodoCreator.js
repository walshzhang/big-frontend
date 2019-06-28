import React, { Component } from 'react';

export class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ''
    };
  }

  actionChanged = event => {
    this.setState({ action: event.target.value });
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
          onChange={this.actionChanged}
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
