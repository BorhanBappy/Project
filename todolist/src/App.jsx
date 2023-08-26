import { useState } from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([

    
    
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteItem = (itemToDelete) => {
    alert(`Do you Want delete ${itemToDelete}`);
    // Create a new array without the item to delete
    const updatedTasks = tasks.filter((task) => task !== itemToDelete);
    // Update the tasks state with the new array
    setTasks(updatedTasks)
  };

  const removeAll = () => {
    setTasks([]);
  };

  return (
 
    <div className="flex flex-col items-center">
      <h1 className="text-4xl m-16 font-bold">Sample Todo App</h1>
      {/* ... */}
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteItem={deleteItem} removeAll={removeAll} />
    </div>
  );
};

export default App;
