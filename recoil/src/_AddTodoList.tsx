import { useRecoilState } from 'recoil';
import { ToDoItem, todoList } from './atom';

function AddTodoList() {
  const [todoItems, setTodoItems] = useRecoilState(todoList);

  const addTodo = (item: ToDoItem) => {
    setTodoItems([...todoItems, item]);
  };
  console.log(todoItems);
  return (
    <div>
      AddTodoList
      <button
        onClick={() =>
          addTodo({
            id: 'temp',
            title: 'temp',
            desc: 'desc',
          })
        }
      >
        add
      </button>
    </div>
  );
}

export default AddTodoList;
