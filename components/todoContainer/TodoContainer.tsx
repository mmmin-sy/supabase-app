'use client'

import AddTodo from "@/components/addTodo/AddTodo";
import TodoItem from "@/components/todoItem/TodoItem";
import { todoList } from "./styles.css";
import {useContext, useEffect} from "react";
import {TodoContext} from "@/context/TodoContext";
import {selectTodos} from "@/api/route";
import { TodoType } from "@/types/todos.type";

export default function TodoContainer (){
	const { todos, updateTodos } = useContext(TodoContext);

	useEffect(() => {
		selectTodos().then(todos=> {
			updateTodos(todos)
		})

	}, []);

	return (
			<div className={todoList}>
				<AddTodo/>
				<div>
					{todos && todos.length < 1 && <div>Loading....</div>}
					{todos && todos.length > 0 && todos?.map((t: TodoType) => <TodoItem id={t.id} text={t.todo} completed={t.completed}/>)}
				</div>
			</div>
	);
}