import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', dueDate: '', status: 'Pending' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tasks');
      console.log('Tasks fetched:', response.data);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Cannot fetch tasks. Is the backend running on port 8080?');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!form.title.trim()) {
      alert('Please enter a title');
      return;
    }
    
    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/tasks/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post('http://localhost:8080/tasks', form);
      }
      setForm({ title: '', description: '', dueDate: '', status: 'Pending' });
      fetchTasks();
      alert('Task saved successfully!');
    } catch (error) {
      console.error('Error saving task:', error);
      alert('Error saving task: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleEdit = (task) => {
    setForm(task);
    setEditingId(task.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const task = tasks.find(t => t.id === id);
      await axios.put(`http://localhost:8080/tasks/${id}`, { ...task, status });
      fetchTasks();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">{editingId ? 'Update' : 'Add'} Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <strong>{task.title}</strong> - {task.description} - Due: {task.dueDate} - Status: {task.status}
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
              <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
