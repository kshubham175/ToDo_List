import React from "react";
import {useDispatch} from "react-redux";

  
export default function AddTodo()
{
    const dispatch=useDispatch();
    var Title,Description,Status,Date;
   function handleTitleChange(e)
   {
    Title=e.target.value;
    Title.trim();
   }
   function handleDescriptionChange(e)
   {
    Description=e.target.value;
    Description.trim();
   }
   function handleStatusChange(e)
   {
    Status=e.target.value;
    Status.trim();
   }
   function handleDateChange(e)
   {
    Date=e.target.value;
    Date.trim();
   }
   
function handleClick()
{
   var temp =[{title:Title,description:Description,status:Status,date:Date}];
    
    dispatch({type:"AddTitle",payload:temp});
 
}
    return( 
        <>
    <header>TO-DO List</header>
    <br/>
<form id="form" >
<label  >
Title:
<input type='text' name='Title' onChange={handleTitleChange} />

Description:
<input type="text" name="Description" onChange={handleDescriptionChange}/>
Status:
<select   onChange={handleStatusChange}>
    <option selected disabled>Choose</option>
    <option>Done</option>
    <option>Stalled</option>
    <option>Ongoing</option>
    <option>ToDo</option>
</select>
Due Date:
<input type="date" onChange={handleDateChange}/ >
< button type="button" onClick={handleClick}>Save</button>
         </label>
</form>
<br/>
<br/>
</>
    )
}
