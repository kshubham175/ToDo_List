import React from "react";
import {useDispatch} from "react-redux";

  
export default function AddTodo()
{
    const dispatch=useDispatch();

   
function handleSubmit(e)
{
   var temp =[{title:e.target[0].value,description:e.target[1].value,status:e.target[2].value,date:e.target[3].value}];
    
    dispatch({type:"AddToDo",payload:temp});
 
}
    return( 
        <>
    <header>TO-DO List</header>
    <br/>
<form id="form" onSubmit={handleSubmit}>
<label  >
Title:
<input type='text' name='Title' />

Description:
<input type="text" name="Description" />
Status:
<select   >
    <option ></option>
    <option>Done</option>
    <option>Stalled</option>
    <option>Ongoing</option>
    <option>ToDo</option>
</select>
Due Date:
<input type="date" / >
< button type="submit" >Save</button>
         </label>
</form>
<br/>
<br/>
</>
    )
}
