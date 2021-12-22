
import {createStore} from 'redux';
import { addTodo,toggleTodo } from "./action";
import {reducer} from "./reducer";

//initial state
const initState={
    todo:[]
}

 export const store=createStore(reducer,initState)
console.log(store.getState())

store.dispatch(addTodo("BUY_MILK"))
store.dispatch(addTodo("BUY BREAD"))
store.dispatch(toggleTodo("BUY BREAD"))
console.log(store.getState())
