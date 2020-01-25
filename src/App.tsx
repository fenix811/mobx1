import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react'

import { TodoStore } from './stores/todo.store'
import { TodoAdd } from './components/todo.add'
import TodoList from './components/todo.list'

export class App extends Component {
  private todoStore: TodoStore = new TodoStore()

  render(){
  return (
      <Provider todoStore={this.todoStore}>
        <div>
          <TodoAdd />
          <TodoList todoStore={this.todoStore}/>
        </div>
      </Provider>  );
}
}

export default App;
