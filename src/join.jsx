import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Join({ todo, deleteTodo, tag, tagIsEditing,addTodo,deleteok }) {




  return todo.isEditing ? (
    <EditForm todo={todo} addTodo={addTodo} deleteok={deleteok}/>
  ) : (
    <div className={`join ${todo.isCompleted ? "completed" : ''}`}>
      <div
        onClick={() => {
          tag(todo.id);
        }}
      >
        {todo.content}
      </div>

      <div>
        <MdEdit onClick={() => {
          tagIsEditing(todo.id);
          
        }}
        style={{ cursor: "pointer" }} /> 

        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Join;
