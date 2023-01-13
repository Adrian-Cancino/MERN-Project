import { Route, Routes } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskForm } from "./pages/TaskForm";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { TaksContextProvider } from "./context/TaskContext";

function App() {
  return (
    <TaksContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </TaksContextProvider>
  )
}

export default App