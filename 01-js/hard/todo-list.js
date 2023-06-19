/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todos = [];

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (this.isInvalidIndex(indexOfTodo, this.todos)) return;
    delete this.todos[indexOfTodo];
    for(let i = indexOfTodo; i < this.todos.length-1; i++) {
      this.todos[i] = this.todos[i+1]
    }
    this.todos.length--;
  }

  update(index, updatedTodo) {
    if (this.isInvalidIndex(index, this.todos)) return;
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (this.isInvalidIndex(indexOfTodo, this.todos)) return null;
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos.length = 0;
  }

  isInvalidIndex(index, arr) {
    return index >= arr.length ? true : false;
  }

}

module.exports = Todo;
