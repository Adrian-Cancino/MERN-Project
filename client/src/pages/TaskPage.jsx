import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

import TaskCard from "../components/TasksCard";

export const TaskPage = () => {

  const { tasks, loadTask } = useTasks();

  useEffect(() => {    
    loadTask()
  }, [])

  function renderMain(){

    if (tasks.length === 0) return <h1>No Tasks Yet</h1>
    return tasks.map(task => <TaskCard task={task} key={task.id} />);
  }
  

  return (
    <div>
      <h1>Tasks</h1>

    {renderMain()}

    </div>
  )
}
