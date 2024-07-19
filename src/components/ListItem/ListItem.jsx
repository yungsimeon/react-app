import "./ListItem.css";

export default function ListItem({ task, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(task._id);
  };
  return (
    <div key={task._id} className="list-item-wrapper">
      <p className="task-info">{task.taskName}</p>
      <p className="task-info">{task.priority}</p>
      <p className="task-info"> {task.dueDate}</p>
      <p className="task-info">{task.hasDone ? "✅" : "❌"}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
