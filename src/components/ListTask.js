// src/components/ListTask.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../redux/taskSlice";
import "./ListTask.css";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => dispatch(filterTasks("all"))}>All</button>
        <button onClick={() => dispatch(filterTasks("done"))}>Done</button>
        <button onClick={() => dispatch(filterTasks("not"))}>Not Done</button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;


