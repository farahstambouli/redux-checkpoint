
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/taskSlice";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task description:", task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task">
      <span
        className={`task-description ${task.isDone ? "done" : ""}`}
      >
        {task.description}
      </span>
      <button onClick={handleToggle} className="task-button">
        {task.isDone ? "Undone" : "Done"}
      </button>
      <button onClick={handleEdit} className="task-button">Edit</button>
      <button onClick={handleDelete} className="task-button delete-button">Delete</button>
    </div>
  );
};

export default Task;


