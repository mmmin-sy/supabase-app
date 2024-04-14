import DeployButton from "../../components/DeployButton";
import AuthButton from "../../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import { selectTodos, saveTodo } from '@/api/route';
import TodoContainer from "@/components/todoContainer/TodoContainer";

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
  // const todos = await selectTodos();
  //const todos = await saveTodo('Berlin');
  //const todos = await updateTodo(13, 'Munich');
  //const todos = await deleteTodo(13);

  return (
      <TodoContainer />
  );
}
