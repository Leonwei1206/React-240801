import { useState } from "react";
import React from 'react';


function EditForm({addTodo,todo,deleteok}) {
    const [content,setContent] = useState(todo.content);

    const handleSubmit = (e) => {
        e.preventDefault() /* 不會重新整理*/
        if(content === ''){
            alert('請輸入內容');
        }
        else if(  !isNaN(content)){
            alert('請輸入文字');
        }      
        else{
           
            alert('更改成功')
            
            console.log(content)

            deleteok(todo.id,content)
           
        };
            
        
        
    }


    return(
        <form className="create-Edit" onSubmit={handleSubmit}>
            <input id="#" type="text" placeholder="輸入今日需完成事項"value={content} onChange={(e) => {
                setContent(e.target.value)}
            }/>
            <button id="#"type="submit" >完成</button>

        </form>

    );
    

    
}

export default EditForm