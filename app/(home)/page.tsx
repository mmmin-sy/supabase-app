import DeployButton from "../../components/DeployButton";
import AuthButton from "../../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { todoList } from '@/styles/styles.css';
import { selectTodos, saveTodo } from '@/api/route';
import TodoItem from '@/components/todoItem/TodoItem';
import AddTodo from '@/components/addTodo/AddTodo';

export const supabase = createClient();

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
    <div className={todoList}>
      <AddTodo />
      <div>
        {todos && todos?.map(t => <TodoItem id={t.id} text={t.todo} completed={t.completed} />)}
      </div>
    </div>
  );
}
