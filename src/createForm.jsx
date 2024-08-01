import { useState } from "react";
import React from 'react';
import "./App.css";

function CreateForm({addTodo,todos}){

    const [content,setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() /* 不會重新整理*/
    
        if(content === ''){
            alert('請輸入內容');
        }
        else if(  !isNaN(content)){
            alert('請輸入文字');
        }    
        else if( todos.some(todo => todo.content === content)){
            alert('已有重複的行程');
        }   
        else{
            alert('新增成功')
            addTodo(content)
            console.log(content)
        
            setContent('') /*清空輸入框*/
        };
            
        
        
    }
  
    return(
        <form className="create-form" onSubmit={handleSubmit}>
            <input id="wrto" type="text" placeholder="輸入今日需完成事項"value={content} onChange={(e) => {
                setContent(e.target.value)}
            }/>
            <button id="into"type="submit" >加入</button>

        </form>

    );


}

export default CreateForm;
