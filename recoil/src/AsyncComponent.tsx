import { useRecoilValue } from 'recoil';
import { recoilStar } from './atom';

function AsyncComponent() {
  const starCount = useRecoilValue(recoilStar);

  return (
    <div>
      AsyncComponent
      {starCount}
    </div>
  );
}

export default AsyncComponent;
