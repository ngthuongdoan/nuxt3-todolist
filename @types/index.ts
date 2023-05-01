export interface Tab {
  name: string
  href?: string
}

export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  author: string
  dueDate: Date
}
