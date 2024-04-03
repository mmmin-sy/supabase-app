'use server';

import {supabase} from "@/app/(home)/page";

export async function selectTodos (){
	const { data: todos, error } = await supabase.from("todos").select();
	if (!error) return todos;
	else return null;
}
async function saveTodo (todo: string){
	const { error: error } = await supabase
			.from('todos')
			.insert({ todo: todo })

	if(!error) return await selectTodos();
	else return null;
}
export async function updateTodo (id: number, data: { todo: string, completed: boolean}){
	const { error: error } = await supabase
			.from('todos')
			.update( {...data} )
			.eq('id', id)
	if(!error) return await selectTodos();
	else return null;
}
export async function deleteTodo (id: number){
	const { error } = await supabase
			.from('todos')
			.delete()
			.eq('id', id)
	if(!error) return await selectTodos();
	else return null;
}