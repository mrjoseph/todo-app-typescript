export interface Todo {
  id: string
  item: string
  timestamp: number
  status: string
}

export interface TodoState {
  todos: Todo[]
}