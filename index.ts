import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean
}

axios.get(url).then(response => {
  // Response.data has properties of:
  // id
  // title
  // completed
  const todo = response.data as Todo;
  
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logoTodo(id, title, completed)
});

const logoTodo = (id:number, title:string, completed:boolean) => {
  console.log(`
  The Todo  with ID:${id}
  Has a title: ${title}
  Is it finished:  ${completed}
  `)
}