import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);


  const [value, setValue] = useState("");

  const handleAddTodo = () => {

    if(value === "") return
    console.log(value)
    const newTodos = [...todos, {id:Date.now(), value, completed:false}];
    setTodos(newTodos)
    setValue("");
  }

  

  const todoToggle = (id) => {


    console.log(id)
    setTodos((prev) => 
      prev.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed}:todo)
    )
  }




  return (
    <>
      <div className='bg-slate-600 w-full min-h-full h-screen flex flex-col items-center p-12'>

        <div className='w-1/2 flex justify-center items-center'>
          <input type="text" placeholder='Add Todo' className='p-4 m-4 rounded-sm' value={value} onChange={(e) => setValue(()=> (e.target.value != "" ? e.target.value:null))}/>
          </div>

          {" "}

          <div className='p-4  m-2 rounded-md'>
            {todos.map((todo) => (
             <div key={todo.id} className='flex items-start p-2 bg-slate-500'>
              <input type="checkbox" className='mt-2  p-2' value= {todo.completed} onChange={() => (todoToggle(todo.id))} />
              <div className={`${todo.completed ? 'checked':'unChecked'} mx-2  text-white text-lg`} >{console.log(todo.value)}{todo.value}</div>
             </div>
            ))}  
          </div>  

          <div>

          <button className='p-4 bg-blue-600 text-white rounded-md uppercase' onClick={handleAddTodo}>Add To do</button>
          </div>

      </div>
    </>
  )
}

export default App
