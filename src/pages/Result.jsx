import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetScore } from "../features/scores/scoresSlice";
import TrophyIcon from "../assets/trophy_icon.svg";

const Result = () => {
  const score = useSelector((state) => state.scores.score);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className="w-screen lg:w-1/2 bg-primary-700 p-4">
        <h2 className="text-center text-white text-xl mt-12">
          Congratulations!
        </h2>

        <img
          src={TrophyIcon}
          alt="An icon that represent trophy"
          className="w-2/3 my-10 mx-auto"
        />

        <p className="text-center text-white text-lg ">You Scored</p>
        <p className="text-center text-white text-4xl font-bold mb-12">
          {score * 10}/100
        </p>
        <div className="flex justify-center md:mt-16">
          <button className="bg-secondary-300 w-5/6 rounded-md cursor-pointer" onClick={()=> dispatch(resetScore())}>
            <Link to="/">
              <p className="py-4 text-center text-2xl font-medium text-white">
                Try Again
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
