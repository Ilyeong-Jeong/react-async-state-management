import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export interface ToDoItem {
  id: string;
  title: string;
  desc: string;
}

export const countState = atom<number>({
  key: 'countState',
  default: 0,
});

export const countSelector = selector<number>({
  key: 'countSelector',
  get: ({ get }) => get(countState) * 2,
  set: ({ set }, newValue) => set(countState, (newValue as number) / 2),
});

export const recoilStar = selector({
  key: 'recoil/star',
  get: async () => {
    const response = await fetch(
      'https://api.github.com/repos/facebookexperimental/Recoil',
    );
    const result = await response.json();
    return result.stargazers_count;
  },
});

export const projectStar = selectorFamily({
  key: 'project/star',
  get: (path: string) => async () => {
    if (!path) return '...';

    const response = await fetch(`https://api.github.com/repos/${path}`);
    const projectInfo = await response.json();
    return projectInfo.stargazers_count;
  },
});

export const todoList = atom<ToDoItem[]>({
  key: 'todoList',
  default: [],
});

export const todoItemFamily = atomFamily<ToDoItem, string>({
  key: 'todoItemFamily',
  default: (id) => ({
    id,
    title: 'temp',
    desc: 'desc',
  }),
});
