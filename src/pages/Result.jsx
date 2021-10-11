import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../features/scores/scoresSlice";

const Result = () => {
  const score = useSelector((state) => state.scores.score);
  const dispatch = useDispatch();
  return (
    <div>
      {score}
      <button onClick={() => dispatch(resetScore())}>Try Again</button>
    </div>
  );
};

export default Result;
