import { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onDragEnter={() => {
        setShow(true);
      }}
      onDragLeave={() => {
        setShow(false);
      }}
      onDrop={() => {
        setShow(false);
        onDrop();
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={show ? "drop_area" : "hide_drop"}>
      drop hear
    </div>
  );
};

export default DropArea;
