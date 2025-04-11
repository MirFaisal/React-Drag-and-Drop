import React, { useEffect, useState } from "react";

import axios from "axios";
import "./App.css";
import doneIcon from "./assets/check-mark-button.png";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/tasks").then((res) => {
      setTasks(res.data.tasks);
    });
  }, []);

  const onDrop = (status, index) => {
    console.log(`${activeCard} dropped on ${status} at index ${index}`);

    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    console.log(taskToMove);
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(index, 0, {
      ...taskToMove,
      status,
    });

    const filteredTasks = updatedTasks.map(({ id, ...rest }) => rest);
    console.log(filteredTasks);
    axios.patch("http://localhost:3002/tasks/position", filteredTasks).then((res) => {
      console.log(res);
    });
    setTasks(updatedTasks);
    setActiveCard(null);
  };

  return (
    <div className="app">
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          icon={doingIcon}
          tasks={tasks}
          status="inProgress"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
