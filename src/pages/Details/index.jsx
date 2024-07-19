import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Details.css";

export default function Details({ tasks, setTasks }) {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const taskProfile = tasks.find((task) => String(task._id) === String(taskId));

  const [taskName, setTaskName] = useState(taskProfile.taskName);
  const [hasDone, setHasDone] = useState(taskProfile.hasDone);
  const [dueDate, setDueDate] = useState(taskProfile.dueDate);
  const [priority, setPriority] = useState(taskProfile.priority);
  const [description, setDescription] = useState(taskProfile.description);
  const [assignee, setAssignee] = useState(taskProfile.assignee);

  useEffect(() => {
    setTaskName(taskProfile.taskName);
    setHasDone(taskProfile.hasDone);
    setDueDate(taskProfile.dueDate);
    setPriority(taskProfile.priority);
    setDescription(taskProfile.description);
    setAssignee(taskProfile.assignee);
  }, [taskProfile]);

  const handleInput = (e, setState, isCheckbox) => {
    setState(isCheckbox ? e.target.checked : e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskProfile,
      taskName,
      hasDone,
      priority,
      dueDate,
      description,
      assignee,
    };

    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
    navigate("/");
  };

  if (!taskProfile) {
    return (
      <div>
        <h2>Task Not Found</h2>
        <p>The task you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <h1>Edit task</h1>
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
                    checked={hasDone}
                    onChange={(e) => handleInput(e, setHasDone, true)}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button type="submit">Update Task</button>
          </div>
        </form>
      </div>

      <h2>Task Details</h2>
      <div className="details_list-item-wrapper">
        <p className="task-info">
          Task: <span className="task-span">{taskProfile.taskName}</span>{" "}
        </p>
        <p className="task-info">
          Description:{" "}
          <span className="task-span">{taskProfile.description}</span>{" "}
        </p>
        <p className="task-info">
          Assignee: <span className="task-span"> {taskProfile.assignee}</span>
        </p>
        <p className="task-info">
          Priority: <span className="task-span">{taskProfile.priority} </span>
        </p>
        <p className="task-info">
          Due until: <span className="task-span"> {taskProfile.dueDate}</span>
        </p>
        <p className="task-info">
          {" "}
          <span className="task-span">
            {" "}
            {taskProfile.hasDone ? "✅" : "❌"}{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
