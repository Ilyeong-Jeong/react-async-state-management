import { useRecoilValue } from 'recoil';

import { todoItemFamily } from './atom';

function TodoItem({ id }: { id: string }) {
  const todo = useRecoilValue(todoItemFamily(id));

  return (
    <div>
      id: {todo.id}
      title: {todo.title}
      desc: {todo.desc}
    </div>
  );
}

export default TodoItem;
