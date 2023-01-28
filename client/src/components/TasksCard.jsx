import { deleteTaskRequest } from "../api/task.api";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {

    const { deleteTask, toggleTaskDone } = useTasks();
    const navigate = useNavigate();

    const handleDone = async(taskDone) => {
        await toggleTaskDone(task.id)
    }

    return (
        <div className="bg-slate-300 rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-sm font-bold">{ task.title }</h2>
                <span className="">{ task.done == 1 ? '✔️' : '❌' }</span>
            </header>
            <p className="text-xs">{ task.description }</p>            
            <span>{ task.createAt }</span>

            <div className="flex gap-x-1 ">
                <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>Delete</button>
                <button className="bg-slate-500 px-2 py-1 text-white" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
                <button className="bg-green-500 px-2 py-1 text-white" onClick={() => handleDone(task.done)}>Toggle Taks</button>
            </div>
        </div>
    )
}

export default TaskCard;