'use client'

import { saveTodo } from '@/api/route';
import { useState } from "react";
export default function AddTodo (){
	const [value, setValue] = useState<string>('');

	return (
			<div>
				<form action={saveTodo.bind(null, value)}>
					<input className="newTodo" value={value} onChange={(event) => setValue(event.target.value)} />
					<button type='submit'>Add</button>
				</form>
			</div>
	);
}