import { useRecoilValue } from 'recoil';
import { countState } from './atom';

function TestPage() {
  const count = useRecoilValue(countState);

  return (
    <div>
      TestPage
      {count}
    </div>
  );
}

export default TestPage;
