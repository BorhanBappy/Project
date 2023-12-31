import React from "react";

const TaskList = ({ tasks, deleteItem, removeAll, doUndo }) => {
  // console.log(tasks[2])
  return (
    <div className=" mr-28">
      {tasks.length > 0 ? (
        <ul className="">
          {tasks.map((item, index) => {
            // console.log(item)
            return (
              <li key={index} className=" bg-slate-200 rounded-xl px-4 font-bold">
                <div className=" p-2 m-2 flex justify-between w-full items-center h-full">
                  <span
                    className={`cursor-pointer ${
                      item.done ? "line-through bg-red-200" : ""
                    } `}
                    onClick={() => doUndo(item)}
                  >
                    {item.task}
                  </span>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 text-white p-2 mx-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No task available </p>
        </div>
      )}

      {tasks.length > 0 && (
        <button
          onClick={removeAll}
          className="bg-red-500 text-white ml-8 mt-5 p-2 mx-1 rounded-md hover:bg-red-800"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default TaskList;
