
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { TodoStore, todoStore } from '../stores/todo.store'
import { TodoListItem } from './todo.list.item'
import PropTypes from 'prop-types';

interface TodoListProps {
  todoStore?: TodoStore
}

@observer
export default class TodoListComponent extends Component<TodoListProps> {
render() {
    return <>
    {this.props.todoStore?.todoList.map((todo:any, idx: any) => {
      return (
        <div>{todo.task}</div>
    )}
    )
    }
  </>
}
}

