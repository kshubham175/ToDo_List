import {createStore} from 'redux'
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const initialState ={
    todos: [],
     
}
const reducer=(state=initialState,action)=>{
   if(action.type==='AddTodo')
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
const persistConfig ={
    key:'root',storage,
}
const persistedReducer=persistReducer(persistConfig,reducer);
export default() =>{
let store = createStore(persistedReducer);
let persistor = persistStore(store);
return { store, persistor }
}