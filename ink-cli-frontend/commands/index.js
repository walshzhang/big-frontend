import React, { useState, useEffect } from 'react';
import { Box } from 'ink';
import { Message } from '../components/message';
import { Row } from '../components/row';
import { fetchAll } from '../components/datasource';

const Todo = ({ todo, index }) => {
	const color = todo.done ? '#00ff00' : '#ffffff';
	return (
		<Row cols={[index, todo.action]} styles={[color, false]} />
	);
};

const Header = _ => {
	return <Row cols={['#', '描述']} styles={['#ADD8E6', true]} />;
};

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		async function effect() {
			const items = await fetchAll();
			setTodos(items);
		}
		effect();
	}, []);

	if (todos.length > 0) {
		return (
			<Box flexDirection='column' marginY={1}>
				<Header />
				{todos.map((todo, index) => (
					<Todo todo={todo} key={todo.action} index={index + 1} />
				))}
			</Box>
		);
	}

	return <Message msg='当前没有待办事项！' />;
};

export default TodoList;
