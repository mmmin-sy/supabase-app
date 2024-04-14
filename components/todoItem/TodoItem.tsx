'use client';

import {disabledColor, container} from './styles.css';
import {deleteTodo, selectTodos, updateTodo} from '@/api/route';
import {useContext, useEffect} from "react";
import {TodoContext} from "@/context/TodoContext";

interface TodoProps {
	id: number;
	text: string;
	completed: boolean;
}
export default function TodoItem ({ id, text, completed } : TodoProps){
	const { updateTodos } = useContext(TodoContext);

	const changeTodoStatus = () => {
		updateTodo(id, { todo: text, completed: true})
			.then(() => selectTodos()
				.then(todos=> {
					updateTodos(todos)
			}));
	}

	const deleteTodoItem = () => {
		deleteTodo(id)
			.then(() => selectTodos()
				.then(todos=> {
					updateTodos(todos)
				}));
	}

	return (
			<div className={container}>
				<span><input type="checkbox" disabled={completed}/></span>
				<span className={completed ? disabledColor : ''}>{text}</span>
				<button type='button' onClick={changeTodoStatus}>{completed ? 'Reverse' : 'Complete'}</button>
				<button type='button' onClick={deleteTodoItem}>Delete</button>
			</div>
	);
}
