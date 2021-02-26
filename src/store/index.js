import {createStore} from 'redux'

const initialState ={
    todos: [],
     
}
const reducer=(state=initialState,action)=>{
   if(action.type==='AddTitle')
   {
       return{
        ...state,
        todos:[...state.todos,
        {
            id:state.todos.length+1,
            Title:action.payload[0].title,
            Description:action.payload[0].description,
            Status:action.payload[0].status,
            Date:action.payload[0].date,
        }]
       }
    
}
    return state;
}
const store= createStore(reducer);


export default store