import React, { useState, useEffect } from 'react';
import { Message } from '../components/Message';
import { toggleTodo } from '../components/DataSource';

const Toggle = ({ id }) => {
	let [msg, setMsg] = useState('');

	useEffect(() => {
		async function effect() {
			toggleTodo(id).then(setMsg('toggled successfully!'));
		}
		effect();
	}, []);

	return <Message msg={msg} />;
};

export default Toggle;
