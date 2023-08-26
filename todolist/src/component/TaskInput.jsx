import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className=" ">
      <input
        className="bg-slate-100 rounded-md p-4 m-4 "
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="➕Add Item .."
      />
      <button
        onClick={handleAddTask}
        className="bg-green-400 text-white rounded-md font-bold p-3 m-3 hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
