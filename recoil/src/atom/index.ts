import { atom, selector, selectorFamily } from "recoil";

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const recoilStar = selector({
  key: 'recoil/star',
  get: async () => {
    const response = await fetch(
      'https://api.github.com/repos/facebookexperimental/Recoil'
    );
    const result = await response.json();
    return result.stargazers_count;
  }
});

// export const projectStar = selector({
//   key: 'project/star',
//   get: (path) => async () => {
//     if (!path) return '...';

//     const response = await fetch(
//       `https://api.github.com/repos/${path}`
//     );
//     const projectInfo = await response.json();
//     return projectInfo.stargazers_count;
//   }
// });

export const projectStar = selectorFamily({
  key: 'project/star',
  get: (path: string) => async () => {
    if (!path) return '...';

    const response = await fetch(
      `https://api.github.com/repos/${path}`
    );
    const projectInfo = await response.json();
    return projectInfo.stargazers_count;
  }
});