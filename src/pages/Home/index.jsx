import List from "../../components/List/List";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./Home.css";
import "./Button.css";

export default function Home({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");
  const [hasDone, setHasDone] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task._id !== id);
    setTasks(updatedTasks);
  };

  const resetForm = () => {
    setTaskName("");
    setHasDone(false);
    setDueDate("");
    setPriority("");
    setDescription("");
    setAssignee("");
  };

  const handleInput = (e, setState, isCheckbox) => {
    setState(isCheckbox ? e.target.checked : e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      _id: uuidv4(),
      taskName,
      hasDone,
      priority,
      dueDate,
      description,
      assignee,
    };
    setTasks([newTask, ...tasks]);
    resetForm();
  };

  return (
    <div className="content-wrapper">
      <h1>To-Do List</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-input-wrapper">
            <div className="form-left">
              <div className="form-group">
                <label>
                  Task
                  <input
                    name="taskName"
                    type="text"
                    placeholder="Task"
                    value={taskName}
                    onChange={(e) => handleInput(e, setTaskName)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Description
                  <textarea
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => handleInput(e, setDescription)}
                  />
                </label>
              </div>
            </div>
            <div className="form-middle">
              <div className="form-group">
                <label>
                  Priority
                  <select
                    name="priority"
                    value={priority}
                    onChange={(e) => handleInput(e, setPriority)}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </label>
              </div>

              <div className="form-group">
                <label>
                  Assignee
                  <input
                    name="assignee"
                    type="text"
                    placeholder="Name"
                    value={assignee}
                    onChange={(e) => handleInput(e, setAssignee)}
                  />
                </label>
              </div>
            </div>
            <div className="form-right">
              <div className="form-group">
                <label>
                  Due until
                  <input
                    name="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => handleInput(e, setDueDate)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Done
                  <input
                    name="complete"
                    type="checkbox"
                    value={hasDone}
                    onChange={(e) => handleInput(e, setHasDone, true)}
                  />
                </label>
              </div>
            </div>
          </div>

          <button type="submit">Add Task</button>
        </form>
      </div>
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
