import React, { useState } from 'react';
import './TaskEditModal.css';

const TaskEditModal = ({ task, editTask, closeModal }) => {
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
    closeModal();
  };

  return (
    <div className="modal">
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
        <button type="submit">Save Changes</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskEditModal;
