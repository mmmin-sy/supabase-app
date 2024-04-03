'use client';

import {disabledColor, container} from './styles.css';
import { deleteTodo, updateTodo } from '@/api/route';

interface TodoProps {
	id: number;
	text: string;
	completed: boolean;
}
export default function TodoItem ({ id, text, completed } : TodoProps){

	return (
			<div className={container}>
				<span><input type="checkbox" disabled={completed} /></span>
				<span className={completed ? disabledColor : ''}>{text}</span>
				<form action={updateTodo.bind(null, id, { todo: text, completed: true})}>
					<button type='submit'>{completed ? 'Reverse' : 'Complete'}</button>
				</form>
				<form action={deleteTodo.bind(null, id)}>
					<button type='submit'>Delete</button>
				</form>
			</div>
	);
}
