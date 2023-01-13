import { deleteTaskRequest } from "../api/task.api";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {

    const { deleteTask } = useTasks();

    

    return (
        <div>
            <h2>{ task.title }</h2>
            <p>{ task.description }</p>
            <span>{ task.done == 1 ? 'done' : 'Not done' }</span>
            <hr />
            <span>{ task.createAt }</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default TaskCard;