import datas from "../utils/data.json";
import { useState } from "react";
import Progressbar from "../components/Progressbar";
const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = datas.length;
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

          {userAnswer === datas[currentPage].answer && <p>yeay</p>}
          <div className="mt-8">
            {currentPage + 1 !== totalPage ? (
              <button
                className="bg-primary-500"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            ) : (
              <button className="bg-primary-500">Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
