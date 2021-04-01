import {gql} from '@apollo/client'

export const CREATE_TODO = gql`
  mutation createTodo(
    $userId: Int!,
    $title: String!,
    $body: String!
  ) {
    createTodo(
      userId: $userId,
      title: $title,
      body: $body
    ) {
      id, title, body
    }
  }
`