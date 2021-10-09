import datas from "../utils/data.json";
import { useState } from "react";
import Progressbar from "../components/Progressbar";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addScore } from "../features/scores/scoresSlice";
const Quiz = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userAnswer, setUserAnswer] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPage = datas.length;

  const handleScore = () => {
    userAnswer === datas[currentPage].answer && dispatch(addScore());
    currentPage + 1 === totalPage && history.push("/result");
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className=" w-1/2  border-primary border-r-2 border-l-2 bg-white p-8">
        <p className="text-xl">
          Question {datas[currentPage].number} / {totalPage}
        </p>

        <Progressbar
          currentPage={datas[currentPage].number}
          totalPage={totalPage}
        />

        <div className="mt-8">
          <p>{datas[currentPage].question}</p>
          <div className="mt-8 flex flex-col">
            <button onClick={() => setUserAnswer(true)}>True</button>
            <button onClick={() => setUserAnswer(false)}>False</button>
          </div>

          <div className="mt-8">
            <button className="bg-primary-500" onClick={handleScore}>
              {currentPage + 1 !== totalPage ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
