import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      status: editedStatus,
    };
    editTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input 
            type="text" 
            value={editedTitle} 
            onChange={e => setEditedTitle(e.target.value)} 
          />
          <textarea 
            value={editedDescription} 
            onChange={e => setEditedDescription(e.target.value)} 
          />
          <input 
            type="date" 
            value={editedDueDate} 
            onChange={e => setEditedDueDate(e.target.value)} 
          />
          <select 
            value={editedStatus} 
            onChange={e => setEditedStatus(e.target.value)} 
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
