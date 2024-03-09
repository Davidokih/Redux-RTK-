import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { increment } from './Services/reducers'
import { useCreateUserMutation, useGetAllUsersQuery, useRemoveUserMutation } from './Services/RTK'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state?.CounterReducer)

  const { data, isLoading, isFetching, isError } = useGetAllUsersQuery({})
  const [name, setName] = useState('')
  const [addUser,{data: result}] = useCreateUserMutation()
  const [deluser] = useRemoveUserMutation()
  if (isLoading) return <h1>Loading...</h1>
  
  const creatingUser = () => {
    addUser({name})
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment(1)) }>
          count is {count?.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input value={name} onChange={ (e) => setName(e.target.value) } />
      <button onClick={creatingUser}>Add User</button>
      <div>All Users</div>
      { data.map((props) => (
        <div>
          <div key={ props?.id }>{ props?.name }</div>
        <button onClick={()=>deluser(props.id)}>Remove</button>
        </div>
      ))}
    </>
  )
}

export default App
