'use client'
import React, {useState, createContext, useContext} from 'react';
import { TodoType } from "@/types/todos.type";

// @ts-ignore
export const TodoContext = createContext<Context>();
export default function PostProvider ({children} : { children: React.ReactNode }){
	const [todos, setTodos] = useState<TodoType[]>([])

	const updateTodos = (newTodos: TodoType[]) => {
		setTodos(newTodos);
	}

	return (
			<TodoContext.Provider value={{ todos, updateTodos }}>
				{children}
			</TodoContext.Provider>
	);
}

export function useTodoContext() {
	return useContext(TodoContext);
}