import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



export const TaskForm = () => {

  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async() => {
      if(params.id){
        const task = await getTask(params.id);
        setTask({
          title: task.description,
          description: task.description
        })
      }
    }
    loadTask();
  }, [])
  

  return (
    <div>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit= { async ( values, actions ) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          }else{
            createTask(values);
          }
          navigate("/")
          actions.resetForm();
        }}
      >{({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={ handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
          <h1 className="text-xl font-bold uppercase text-center">{ params.id ? "Edit Task" : "New Task" }</h1>
          <label className="block">Title</label>
          <input type="text" 
            name="title" 
            placeholder="Write a Title" 
            className="px-2 py-1 rounded-sm w-full"
            onChange={handleChange}
            value = {values.title}
          />

          <label className="block">Description</label>
          <textarea 
            name="description" 
            rows="3" 
            onChange={handleChange}
            placeholder="Write a description"
            className="px-2 py-1 rounded-sm w-full"
            value = {values.description}
          ></textarea>

          <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
            {isSubmitting ? "Saving..." : "Save"}
            </button>
        </Form>
      )}
        
      </Formik>
    </div>
  )
}
