import DeployButton from "../../components/DeployButton";
import AuthButton from "../../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { container } from '@/styles/styles.css';
import TodoItem from '@/components/todoItem/TodoItem';
import { selectTodos, deleteTodo } from '@/api/route';

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
    <div className={container}>
      <div>
        {todos && todos?.map(t => <TodoItem id={t.id} text={t.todo} completed={t.completed} />)}
      </div>
    </div>
  );
}
