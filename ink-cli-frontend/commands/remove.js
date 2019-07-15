import React, { useState, useEffect } from 'react';
import { Message } from '../components/Message';
import { removeTodo } from '../components/DataSource';

const Remove = ({ id }) => {
	let [msg, setMsg] = useState('');

	useEffect(() => {
		async function effect() {
			removeTodo(id).then(setMsg('removed successfully!'));
		}
		effect();
	}, []);

	return <Message msg={msg} />;
};

export default Remove;
