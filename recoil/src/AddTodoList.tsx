import { useRecoilCallback } from "recoil";
import { todoList } from "./atom";

function AddTodoList() {
  const addTodo = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const todoItems = snapshot.getLoadable(todoList).getValue();
        set(todoList, [...todoItems, {
          id: 'temp',
          title: 'temp',
          desc: 'desc',
        }]);
      },
    [],
  );

  return (
    <div>
      AddTodoList
      <button onClick={() => addTodo()}>add</button>
    </div>
  );
}

export default AddTodoList;