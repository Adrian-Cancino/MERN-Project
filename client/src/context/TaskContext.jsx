import { createContext, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest } from "../api/task.api";

export const TaskContext = createContext();

export const useTasks = () => {
   const context = useContext(TaskContext);
   if (!context) {
    throw new Error("use Tasks must be used within a TaskContextProvider");
   }
   return context;
}

export const TaksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    async function loadTask(){
        const response = await getTaskRequest()
        setTasks(response.data);
      }

    const deleteTask = async(id) => {
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task)
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <TaskContext.Provider value={{ tasks, loadTask, deleteTask, createTask }}> 
            {children} 
        </TaskContext.Provider>
    );
}