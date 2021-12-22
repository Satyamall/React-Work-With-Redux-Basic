
import { useContext } from 'react';
import './App.css';
import { AppContext } from './Redux/AppContextProvider';

function App() {
  const {getState}=useContext(AppContext);

  const data=getState();
  console.log(data)
  return (
    <div className="App">
       <h1>Redux Basic With React</h1>
       <p>How Redux work with React</p>
       <div>
         <h1>Todo Data form Store: </h1>
         {
           data.todo.map((item)=>{
             return(
               <div key={item.title}>
                 {item.title}-{item.status}
               </div>
             )
           })
         }
       </div>
    </div>
  );
}

export default App;
