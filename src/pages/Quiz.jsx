import datas from "../utils/data.json";
import { useState } from "react";
import Progressbar from "../components/Progressbar";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addScore } from "../features/scores/scoresSlice";
import Button from "../components/Button";
import Modal from "../components/Modal";
const Quiz = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userAnswer, setUserAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalShowing, setIsModalShowing] = useState(false);

  const totalPage = datas.length;
  
  const handleScore = () => {
    userAnswer === datas[currentPage].answer && dispatch(addScore());
    currentPage + 1 === totalPage && history.push("/result");
    setCurrentPage(currentPage + 1);
    setUserAnswer("");
  };

  const showModal = () => {
    setIsModalShowing(true);
    setTimeout(() => {
      setIsModalShowing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="lg:w-1/2 bg-primary-700 p-8">
        {isModalShowing && <Modal />}
        <p className="text-xl text-white mb-2">
          Question {datas[currentPage].number} / {totalPage}
        </p>

        <Progressbar
          currentPage={datas[currentPage].number}
          totalPage={totalPage}
        />

        <div className="mt-12 bg-white text-primary-700 px-4 sm:px-8 py-8 sm:py-16 rounded-xl">
          <p className="text-2xl font-bold">{datas[currentPage].question}</p>
          <div className="mt-8 flex flex-col">
            <button
              className={`my-1 py-2 px-4 text-lg font-semibold rounded-lg ${
                userAnswer === true
                  ? "bg-secondary-300 ring-0 text-white"
                  : "ring-1 ring-primary-300"
              }`}
              onClick={() => setUserAnswer(true)}
            >
              True
            </button>
            <button
              className={`my-1 py-2 px-4 text-lg font-semibold rounded-lg ${
                userAnswer === false
                  ? "bg-secondary-300 ring-0 text-white"
                  : "ring-1 ring-primary-300"
              }
              `}
              onClick={() => setUserAnswer(false)}
            >
              False
            </button>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              text={currentPage + 1 !== totalPage ? "Next" : "Submit"}
              onClick={userAnswer === "" ? showModal : handleScore}
              size={2 / 6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
