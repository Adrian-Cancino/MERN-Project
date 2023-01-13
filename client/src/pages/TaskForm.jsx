import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";


export const TaskForm = () => {

  const { createTask } = useTasks();

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit= { async ( values, actions ) => {
          console.log(values);
          createTask(values)
          actions.resetForm();
        }}
      >{({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={ handleSubmit}>
          <label>Title</label>
          <input type="text" 
          name="title" 
          placeholder="Write a Title" 
          onChange={handleChange}
          value = {values.title}
          />

          <label>Description</label>
          <textarea 
          name="description" 
          rows="3" 
          onChange={handleChange}
          placeholder="Write a description"
          value = {values.description}
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
            </button>
        </Form>
      )}
        
      </Formik>
    </div>
  )
}
