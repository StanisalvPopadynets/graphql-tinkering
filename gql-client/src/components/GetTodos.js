import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { GET_TODOS } from '../graphql/queries'


const GetTodos = () => {
  
  const [todos, setTodos] = React.useState([])
  const {error, loading, data} = useQuery(GET_TODOS) 

  React.useEffect(() => {
    data && setTodos(data.getAllTodos)
  }, [data])

  return (
    <div>
      {todos.map(todo => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default GetTodos
