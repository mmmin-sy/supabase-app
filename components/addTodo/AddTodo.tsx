'use client'

import {saveTodo, selectTodos} from '@/api/route';
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "@/context/TodoContext";
export default function AddTodo (){
	const [value, setValue] = useState<string>('');
	const { updateTodos } = useContext(TodoContext);

	useEffect(() => {
		selectTodos().then(todos=> {
			updateTodos(todos)
		})

	}, []);

	const addTodoItem = () => {
		saveTodo(value)
			.then(() =>
				selectTodos()
					.then(todos=> {
						updateTodos(todos);
						setValue('');
					})
			);
	}

	return (
			<div>
				<input className="newTodo" value={value} onChange={(event) => setValue(event.target.value)}/>
				<button type='button' onClick={addTodoItem}>Add</button>
			</div>
	);
}