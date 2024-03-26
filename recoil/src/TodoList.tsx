import { useRecoilValue } from 'recoil';

import { todoList } from './atom';

function TodoList() {
  const todoItems = useRecoilValue(todoList);

  return (
    <div>
      TodoList
      {todoItems.length > 0 &&
        todoItems.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default TodoList;