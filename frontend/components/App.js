import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let num = 0;

let getId = () => num++

const initialTodos = [
  {id: getId(), name: 'Walk the dog', completed: false},
  {id: getId(), name: 'Thaw out the meat', completed: true},
  {id: getId(), name: 'Gas the vehicles', completed: false}
]


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: initialTodos
    }
  }
  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if(id == td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
