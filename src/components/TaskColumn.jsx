import React from "react";

import DropArea from "./DropArea";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
  return (
    <section className="bg-gray-100 border border-gray-200 rounded-md shadow-sm p-4 transition-opacity duration-200 hover:shadow-lg hover:border-blue-500 min-w-[300px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <img className="w-[30px]" src={icon} alt="" /> {title}
      </h2>
      <DropArea
        onDrop={() => {
          onDrop(status, 0);
        }}
      />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <span key={index} className="flex flex-col gap-2">
              <TaskCard
                key={index}
                title={task.task}
                description={task.description}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DropArea
                onDrop={() => {
                  onDrop(status, index + 1);
                }}></DropArea>
            </span>
          ),
      )}
    </section>
  );
};

export default TaskColumn;
