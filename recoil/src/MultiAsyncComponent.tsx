import { useRecoilValueLoadable } from "recoil";
import { projectStar } from "./atom";
import { useState } from "react";

function MultiAsyncComponent() {
  const [path, setPath] = useState("");
  // const starCount = useRecoilValue(projectStar(path));
  const starLoadable = useRecoilValueLoadable(projectStar(path));
  
  return (
    <div>
      MultiAsyncComponent
      <select onChange={(e) => setPath(e.target.value)}>
        <option value="">Select Project</option>
        <option value="facebook/react">React</option>
        <option value="facebookexperimental/Recoil">Recoil</option>
      </select>
      <br />
      {/* {starCount} */}
      {starLoadable.state === 'hasValue' && <>Stars: {starLoadable.contents}</>}
      {starLoadable.state === 'loading' && <div>loading!!!</div>}
    </div>
  );
}

export default MultiAsyncComponent;