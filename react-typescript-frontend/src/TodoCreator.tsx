import React, { Component } from 'react';

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

export default TodoCreator;
