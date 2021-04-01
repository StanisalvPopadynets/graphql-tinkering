import {gql} from '@apollo/client'

export const GET_TODOS = gql`
  query {
    getAllTodos {
      id,
      userId,
      title,
      body
    }
  }
`