import React from "react";

const TaskCard = ({ title, description, index, setActiveCard }) => {
  return (
    <div
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
      className={`bg-white border border-gray-200 rounded-md shadow-sm p-4 transition-opacity duration-200 border-l-4 cursor-grab hover:shadow-lg hover:border-l-4 hover:border-blue-500`}>
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default TaskCard;
