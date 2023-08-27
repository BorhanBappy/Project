import { useState } from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      task: "Learn react",
      done: false,
    },
    {
      task: "Learn next",
      done: true,
    },
  ]);
  // console.log(tasks);
  const addTask = (task) => {
    console.log();
    setTasks([
      ...tasks,
      {
        task: task,
        done: false,
      },
    ]);
  };

  const deleteItem = (index) => {
    // alert(`Do you Want delete ${JSON.stringify(index, null, 2)}`);
    // Create a new array without the item to delete
    const updatedTasks = tasks.filter((item, i) => i !== index);
    // const updatedTasks2 = tasks.filter((task) => task == itemToDelete);
    // console.log(updatedTasks);
    // Update the tasks state with the new array
    // setTasks2(updatedTasks2)
    setTasks(updatedTasks);
  };
  const doUndo = (item) => {
    const updatedTasks = tasks.map((taskItem) =>
      taskItem === item ? { ...taskItem, done: !taskItem.done } : taskItem
    );
    setTasks(updatedTasks);
    console.log(...taskItem);
  };

  //   <span
  //   className={`cursor-pointer ${item.done ? "line-through" : ""}`}
  //   onClick={() => doUndo(item)}
  // >
  //   {item.task}
  // </span>

  const removeAll = () => {
    setTasks([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl m-16 font-bold">Sample Todo App</h1>
      {/* ... */}
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteItem={deleteItem}
        removeAll={removeAll}
        doUndo={doUndo}
      />
    </div>
  );
};

export default App;
