import { useState } from "react";
import "./App.css";
import CreateForm from "./createForm";
import Join from "./join";
import React from "react";



function Todo() {
  const [todos, setTodes] = useState([
    { content: "讀書", id: Math.random() ,
        isCompleted:false,isEditing:false},
    { content: "寫作業", id: Math.random() ,
        isCompleted:false,isEditing:false},
  ]);

  const deleteok = (id,newContent) =>{
    setTodes(todos.map((todo) =>{
        return todo.id === id
        ? {...todo,content : newContent,isEditing:false}
        :todo
        
    }))
  }

  const deleteTodo =(id) =>{
    setTodes(todos.filter((todo) =>{
        return todo.id !== id
    }))
  }
  const tag = (id) =>{
    setTodes(todos.map((todo) =>{
        return todo.id === id 
        ?{...todo,isCompleted: !todo.isCompleted}
        :todo
    }))
  }

  const addTodo = (content) => {
    setTodes([...todos, { content: content, id: Math.random(),isEditing:false}]);
  };


  const tagIsEditing = (id) =>{
    setTodes(todos.map((todo) =>{
        return todo.id === id 
        ?{...todo,isEditing: !todo.isEditing}
        :todo
        
    }))


  }

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo} todos={todos}/>
      {todos.map((todo) => {
        return <Join tag={tag} addTodo={addTodo}
        tagIsEditing={tagIsEditing} deleteok={deleteok}
        todo={todo} key={todo.id} deleteTodo={deleteTodo}/>;
      })}
    </div>
  );
}

export default Todo;
