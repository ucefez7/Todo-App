import './App.css';
import {useState} from 'react'

function App() {

  let [todos,setTodos]= useState([])
  let [todo, setTodo]= useState('')

  let deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do App</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Nthelm Plan chyy mwonu </h2>
      </div>
      <div className="input">

        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Ntha plan..." />
        <i onClick={()=>setTodos([...todos, {id: Date.now(), text:todo, status:false}])} className="fas fa-plus"></i>


      </div>
      <div className="todos">
{
  todos.map((x)=>{
    return( 
         
        <div className="todo">
          <div className="left">

            <input onChange={(e)=>{
              setTodos(todos.filter((y)=>{
                if(y.id==x.id){
                  y.status=e.target.checked
                }
                return y
              }))
            }}
            value={x.status} type="checkbox" name="" id="" />

            <p>{x.text}</p>

          </div>
          <div className="right">
            <i onClick={()=>deleteTodo(x.id)} className="fas fa-times"></i>
          </div>
        </div>
    )
  })
}

{todos.map((x)=>{
  if(x.status){
    return(
      <h2>{x.text}</h2>
    )
  }
  return null
})}

      </div>
    </div>
  );
}

export default App;