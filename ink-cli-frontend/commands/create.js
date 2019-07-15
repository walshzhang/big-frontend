import React, { useState, useEffect } from 'react';
import { Message } from '../components/Message';
import { addTodo } from '../components/DataSource';

const Add = ({ action }) => {
	let [msg, setMsg] = useState('');

	useEffect(() => {
		async function effect() {
			addTodo(action).then(setMsg('added successfully!'));
		}
		effect();
	}, []);

	return <Message msg={msg} />;
};

export default Add;
