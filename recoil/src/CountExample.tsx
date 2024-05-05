// CountExample.tsx
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countSelector, countState } from './atom';

function CountExample() {
  const [count, setCount] = useRecoilState(countState);
  const countValue = useRecoilValue(countState);
  const setCountValue = useSetRecoilState(countState);
  const [doubleCount, setDoubleCount] = useRecoilState(countSelector);

  return (
    <div>
      Count useRecoilState
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      Count useRecoilValue,
      <button onClick={() => setCountValue((count) => count + 1)}>
        count is {countValue}
      </button>
      <button onClick={() => setDoubleCount(doubleCount + 2)}>
        count is {doubleCount}
      </button>
    </div>
  );
}

export default CountExample;
