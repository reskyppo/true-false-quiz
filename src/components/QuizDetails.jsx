import { useState } from "react";

const QuizDetails = ({ page, number, total, question, answer }) => {
  const [userAnswer, setUserAnswer] = useState();
  console.log(total - number);
  return (
    <div>
      <p className="text-xl">
        Question {number} / {total}
      </p>
      <div className="flex">
        <span className={`h-4 w-${number}/${total} bg-secondary-700 `}></span>
        <span
          className={`h-4 w-${total - number}/${total} bg-primary-100`}
        ></span>
        {total === number && (
          <span className={`h-4 w-full bg-secondary-700`}></span>
        )}
      </div>

      <div className="mt-8">
        <p>{question}</p>

        <div className="mt-8 flex flex-col">
          <button onClick={() => setUserAnswer(true)}>True</button>
          <button onClick={() => setUserAnswer(false)}>False</button>
        </div>

        {userAnswer === answer && <p>yeay</p>}
        <div className="mt-8">
          <button className="bg-primary-500">Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
