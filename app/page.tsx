import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { container } from '@/styles/styles.css';

export const supabase = createClient();
async function selectTodos (){
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
async function updateTodo (id: number, newTodo: string){
  const { error: error } = await supabase
      .from('todos')
      .update({ todo: newTodo })
      .eq('id', id)
  if(!error) return await selectTodos();
  else return null;
}
async function deleteTodo (id: number){
  const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
  if(!error) return await selectTodos();
  else return null;
}
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };
  const isSupabaseConnected = canInitSupabaseClient();

  // Select, Insert, Update and Delete
  const todos = await selectTodos();
  //const todos = await saveTodo('Berlin');
  //const todos = await updateTodo(13, 'Munich');
  //const todos = await deleteTodo(13);

  return (
    <div className={container}>
      <div>{todos && todos?.map(t => <div>{t.todo}</div>)}</div>
    </div>
  );
}
