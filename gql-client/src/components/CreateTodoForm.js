import React from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TODO } from '../graphql/mutations'

const CreateTodoForm = () => {

  const [createTodo, {error}] = useMutation(CREATE_TODO) 

  const [formState, setFormState] = React.useState({})

  const createInputHander = inputName => {
    return (event) => setFormState({
      ...formState,
      [inputName]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const {userId, title, body} = formState
    createTodo({
      variables: {
        userId: Number(userId),
        title: title,
        body: body
      }
    })
    error && console.log(error)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        placeholder="User ID"
        onChange={createInputHander("userId")}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={createInputHander("title")}
      />
      <input
        type="text"
        placeholder="Body"
        onChange={createInputHander("body")}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateTodoForm
