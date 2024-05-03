// CountExample.tsx
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countState } from './atom';


function CountExample() {
  const [count, setCount] = useRecoilState(countState);
  const countValue = useRecoilValue(countState);
  const setCountValue = useSetRecoilState(countState);

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
    </div>
  );
}

export default CountExample;