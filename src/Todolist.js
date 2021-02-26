import React from 'react';
import {useSelector,shallowEqual} from 'react-redux';
const selectTodoIds=state=>state.todos;

export default function Todolist()
{
    
    const todoIds = useSelector(selectTodoIds, shallowEqual)
    const elem=todoIds.map(todo=>
        {
            return <tr key={todo.id}>
                <td >{todo.id}</td>
                <td>{todo.Title}</td>
                <td>{todo.Description}</td>
                <td>{todo.Status}</td>
                <td>{todo.Date}</td>
                </tr> 
        })
    
    return(
        <>
        <table className="table" >
            <tbody>
            <tr>
            <th>S.NO</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            </tr>

           {elem}
           </tbody>
        </table>,
        
        </>
    )
}