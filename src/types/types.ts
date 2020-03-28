export interface Todo {
  id: string
  item: string
  timestamp: string
  status: string
}

export interface TodoState {
  todos: Todo[]
}

export interface IAppProps {
  title: string
}

export interface IState {
  reducer: TodoState
}
