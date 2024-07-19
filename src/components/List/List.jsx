import { useState } from "react";

import ListItem from "../../components/ListItem/ListItem";
import { Link } from "react-router-dom";

export default function List({ tasks, deleteTask }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <Link key={task._id} to={`/details/${task._id}`}>
          <ListItem key={task._id} task={task} onDelete={deleteTask} />
        </Link>
      ))}
    </div>
  );
}
